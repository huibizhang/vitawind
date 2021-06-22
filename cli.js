#!/usr/bin/env node
var exec = require('child_process').exec
var fs = require('fs')

const configPath = process.cwd() + '/vitawind.config.js'
var config = fs.existsSync(configPath) ? require(configPath) : {}

var watcher = require('./lib/watch')
var settings = require('./lib/setting')

var async = false


function configure( _setting ){
  var args = process.argv
  args.forEach(function(element,index,array) {
    if(index < 2)
      return
  
    switch (element) {
      case '-f':{
        _setting.tailwind.configMode = "full"
        break;
      }
      case '--full':{
        _setting.tailwind.configMode = "full"
        break;
      }
      case '-o':{
        var isCommand = ['-f','--full','-o','--output','-m','--manual']
        if(isCommand.indexOf(array[index+1])==-1 && isCommand.indexOf(array[index+2])==-1){
          _setting.tailwind.sourceFile = array[index+1]
          _setting.tailwind.outputFile = array[index+2]
        }else{
          _setting.errors++
          _setting.errorString = " command -o syntax error." + '\x1b[33m' + "\nVisits https://github.com/huibizhang/vitawind#configuring-with-arguments"
        }
        break;
      }
      case '--output':{
        var isCommand = ['-f','--full','-o','--output','-m','--manual']
        if(isCommand.indexOf(array[index+1])==-1 && isCommand.indexOf(array[index+2])==-1){
          _setting.tailwind.sourceFile = array[index+1]
          _setting.tailwind.outputFile = array[index+2]
        }else{
          _setting.errors++
          _setting.errorString = " command --output syntax error." + '\x1b[33m' + "\nVisits https://github.com/huibizhang/vitawind#configuring-with-arguments"
        }
        break;
      }
      case '-m':{
        _setting.vite.configMode = "manual"
        break;
      }
      case '--manual':{
        _setting.vite.configMode = "manual"
        break;
      }
      case '-w':{
        _setting.runMode = "watch"
        break;
      }
      case '--watch':{
        _setting.runMode = "watch"
        break;
      }
    }
  })
}

function init( _setting ) {

  if(_setting.errors>0){
    console.log('  ','\x1b[31m' + "Error:" + _setting.errorString,'\x1b[37m\n');
    return
  }

  var full = (_setting.tailwind.configMode=='full')?'--full':''
  var postcss = fs.existsSync('./postcss.config.js')?'':'-p'
  var command = `npx tailwind init ${full} ${postcss}`

  var cmd = exec(command, function(err, stdout, stderr) {
    if(stderr){
      //console.log('\x1b[31m' + "Error:" + stderr,'\x1b[37m')
      _setting.errorString = stderr
      _setting.errors++

    }else if (err) {
      // handle error
      if(!/already exists/g.test(err)){
        //console.log('\x1b[31m' + "From Plugin - " + err)
        _setting.errorString = "From Plugin - " + err
        _setting.errors++
      }
    }

    console.log(stdout);

    if(!err && !stderr && _setting.vite.configMode=='auto'){
      try {
        var tailwindConfig = fs.readFileSync('tailwind.config.js', 'utf8')
        tailwindConfig = tailwindConfig.replace(
          '  purge: [],',
          `  mode: 'jit',\r\n\  purge: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue}'],`
        )
        fs.writeFileSync('tailwind.config.js',tailwindConfig)
        console.log('  ','\x1b[33m' + "✅ Added setting for JIT:" + '\x1b[37m' + ` tailwind.config.js`)
      } catch (error) {
        _setting.errorString = error
        _setting.errors++
      }

      if(_setting.errors==0){
        var sourceFile = (_setting.tailwind.sourceFile)==''?'./tailwind.css':_setting.tailwind.sourceFile
        var tailwindContents = '@tailwind base;\n@tailwind components;\n@tailwind utilities;'
        if(!fs.existsSync(sourceFile)){
          if(!async){
            try {
              fs.writeFileSync(sourceFile,tailwindContents)
              console.log('  ','\x1b[33m' + "✅ Created file:" + '\x1b[37m' + ` ${sourceFile}`)
            } catch (error) {
              _setting.errorString = error
              _setting.errors++
            }
          }else{
            fs.writeFileSync(sourceFile,tailwindContents,function (error) {
                if(error){
                  _setting.errorString = error
                  _setting.errors++
                }else{
                  console.log('  ','\x1b[33m' + "✅ Created file:" + '\x1b[37m' + ` ${sourceFile}`)
                }
            })
          }
        } 
      }

      if(_setting.errors==0){
        var outputFile = (_setting.tailwind.outputFile)==''?'./src/index.css':_setting.tailwind.outputFile
        if(!async){
          try {
            fs.writeFileSync(outputFile,tailwindContents)
            console.log('  ','\x1b[33m' + "✅ Created file:" + '\x1b[37m' + ` ${outputFile}`)
          } catch (error) {
            _setting.errorString = error
            _setting.errors++
          }
        }else{
          fs.writeFileSync(outputFile,'',function (error) {
              if(error){
                _setting.errorString = error
                _setting.errors++
              }else{
                console.log('  ','\x1b[33m' + "✅ Created file:" + '\x1b[37m' + ` ${outputFile}`)
              }
          })
        }
      }
    }
    modifyViteConfig( _setting )
  });

  cmd.on('exit', function (code) {
      // return value from "npm build"
      //console.log("code:" + code);
      // if(code==1){
      //   console.log('\x1b[31m' + `Tailwind watcher stopped.`,'\x1b[37m');
      // }else{
      //   console.log(`CODE: ${code}`)
      // }
  });
}

function modifyViteConfig( _setting ){

  if(!fs.existsSync("vite.config.js")){
    _setting.errors++
    _setting.errorString = " vite.config.js Not Found."
  }

  if(_setting.errors>0){
    console.log('  ','\x1b[31m' + "Error:" + _setting.errorString,'\x1b[37m\n');
    return
  }

  if(_setting.vite.configMode=='manual'){
    console.log('  ','\x1b[33m' + "For manually setting, please visits " + '\x1b[37m' + "https://github.com/huibizhang/vitawind#manually\n")
    return
  }

  var data = fs.readFileSync('vite.config.js', 'utf8')
  
  const viteImports = new RegExp(/(import\s+.*\s*from\s*.*\s+)+/gm)
  let match = data.match(viteImports)[0]
  let matchArray = match.split(/[\r\n]/)

  matchArray.forEach(element => {
    if(element=='')
      matchArray = matchArray.filter(el => el!='');
  })

  if(match.indexOf("import vitawind from 'vitawind'")==-1){
    matchArray.push("import vitawind from 'vitawind'\r\n\r\n")
    matchArray = matchArray.join("\r\n")
    data = data.replace(match,matchArray)
  }

  const vitePluginsArray = new RegExp(/(?:plugins:\s*\[)([^\]]+)(?:\])/gm)
  match = vitePluginsArray.exec(data)
  pluginsArray = match[1]

  const vitePlugins = new RegExp(/(?:\w+(?:[\(](?:\s?.?\s?.*\s?)[\)])?)/gm)
  match = pluginsArray.match(vitePlugins)
  
  if(pluginsArray.indexOf('vitawind(')==-1){

    var sourceFile = _setting.tailwind.sourceFile
    var outputFile = _setting.tailwind.outputFile
    if(sourceFile=='' && outputFile!=''){
      sourceFile = 'tailwind.css'
    }else if(outputFile=='' && sourceFile!=''){
      outputFile = './src/index.css'
    }

    var using = `vitawind('${sourceFile}','${outputFile}')`
    if(sourceFile=='' && outputFile==''){
      using = `vitawind()`
    }

    match.push(using)
    data = data.replace(pluginsArray,match.join(','))
  }
  //console.log(data);
  
  if(!async){
    try {
      fs.writeFileSync('./vite.config.js',data)
      console.log('  ','\x1b[33m' + "✅ Added setting to config file:" + '\x1b[37m' + " vite.config.js")
    } catch (error) {
      _setting.errorString = error
      _setting.errors++
    }
  }else{
    fs.writeFile('./vite.config.js',data,function (error) {
        if(error){
          _setting.errorString = error
          _setting.errors++
        }else{
          console.log('  ','\x1b[33m' + "✅ Added setting to config file:" + '\x1b[37m' + " vite.config.js")
        }
    })
  }

  if(_setting.errors>0){
    console.log('  ','\x1b[31m' + "Error:" + _setting.errorString,'\x1b[37m\n');
    return
  }
  console.log('')
}

function watch(_config , _setting) {

  if(_config=={}){

    if(!fs.existsSync(process.cwd()+'/tailwind.css') && _setting.errors==0){
      _setting.errors++
      _setting.errorString = 'tailwind.css file is not found.'
    }
    if(!fs.existsSync(process.cwd()+'/src/index.css') && _setting.errors==0){
      _setting.errors++
      _setting.errorString = './src/index.css file is not found.'
    }

    if(_setting.errors==0){
      watcher()
    } else {
      console.log('  ','\x1b[31m' + "Error:" + _setting.errorString,'\x1b[37m\n');
      return
    }
  } else {
    watcher(_config.source,_config.output)
  }
}

configure(settings)

const run = settings.runMode == "watch"

if (!run) {
  console.log('\n\x1b[32m' + 'Starting vitailwind initialize...','\x1b[37m')
  init(settings)
}else {
  console.log(config)
  watch(config)
}



