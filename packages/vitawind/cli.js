#!/usr/bin/env node
var exec = require('child_process').exec
var fs = require('fs')
var settings = require('./lib/setting')
var packageJson = require('./package.json')

//console.log(settings)

var async = false

var localSettings = {
  tailwind: {
    configMode: "normal",
    sourceFile: "",
    outputFile: "",
  },
  vite: {
    configMode: "auto",
  },
  initial:true,
  errors: 0,
  errorString: "",
}

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
        if(isCommand.indexOf(array[index+1])==-1){
          _setting.tailwind.outputFile = array[index+1]
        }else{
          _setting.errors++
          _setting.errorString = " command -o syntax error." + '\x1b[33m' + "\nVisits https://github.com/huibizhang/vitawind#configuring-with-arguments"
        }
        break;
      }
      case '--output':{
        var isCommand = ['-f','--full','-o','--output','-m','--manual']
        if(isCommand.indexOf(array[index+1])==-1){
          _setting.tailwind.outputFile = array[index+1]
        }else{
          _setting.errors++
          _setting.errorString = " command --output syntax error." + '\x1b[33m' + "\nVisits https://github.com/huibizhang/vitawind#configuring-with-arguments"
        }
        break;
      }
      // case '-m':{
      //   _setting.vite.configMode = "manual"
      //   break;
      // }
      // case '--manual':{
      //   _setting.vite.configMode = "manual"
      //   break;
      // }
      case 'version':{
        _setting.initial = false
        console.log(packageJson.version)
      }
    }
  })
}

function init( _setting ) {

  if(_setting.errors>0){
    console.log('  ','\x1b[31m' + "Error:" + _setting.errorString,'\x1b[37m\n');
    return
  }

  var full = (_setting.tailwind.configMode==='full')?'--full':''
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
          'content: [],',
          `content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],`
        )
        fs.writeFileSync('tailwind.config.js',tailwindConfig)
        console.log('  ','\x1b[33m' + "✅ Add setting for purge:" + '\x1b[37m' + ` tailwind.config.js`)
      } catch (error) {
        _setting.errorString = error
        _setting.errors++
      }

      var tailwindContents = '@tailwind base;\n@tailwind components;\n@tailwind utilities;'

      // if(_setting.errors==0){
      //   var sourceFile = (_setting.tailwind.sourceFile)==''?'./tailwind.css':_setting.tailwind.sourceFile
      //   var tailwindContents = '@tailwind base;\n@tailwind components;\n@tailwind utilities;'
      //   if(!fs.existsSync(sourceFile)){
      //     if(!async){
      //       try {
      //         fs.writeFileSync(sourceFile,tailwindContents)
      //         console.log('  ','\x1b[33m' + "✅ Created file:" + '\x1b[37m' + ` ${sourceFile}`)
      //       } catch (error) {
      //         _setting.errorString = error
      //         _setting.errors++
      //       }
      //     }else{
      //       fs.writeFileSync(sourceFile,tailwindContents,function (error) {
      //           if(error){
      //             _setting.errorString = error
      //             _setting.errors++
      //           }else{
      //             console.log('  ','\x1b[33m' + "✅ Created file:" + '\x1b[37m' + ` ${sourceFile}`)
      //           }
      //       })
      //     }
      //   } 
      // }

      if(_setting.errors==0){
        var outputFile = (_setting.tailwind.outputFile)==''?'./src/index.css':_setting.tailwind.outputFile
        if(!async){
          try {
            let lastPath = outputFile.substring(0, outputFile.lastIndexOf("/"))
            fs.mkdirSync(lastPath,{recursive:true})
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

    if(_setting.errors>0){
      console.log('  ','\x1b[31m' + "Error:" + _setting.errorString,'\x1b[37m\n');
      return
    }
    // modifyViteConfig( _setting )
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

configure(localSettings)

if(localSettings.initial){
  console.log('\n\x1b[32m' + 'Starting vitailwind initialize...','\x1b[37m')
  init(localSettings)
}