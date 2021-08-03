#!/usr/bin/env node
// var exec = require('child_process').exec
const fs = require('fs')
const path = require('path')
const cwd = process.cwd()
const rread = require('fs-readdir-recursive')
var argv = require('minimist')(process.argv.slice(2));
const packageJson = require('./package.json')

const setting = {
  project_name: '',
  dist_path: cwd,
  template: '',
  version: '',
  script: '',
  error: false,
  error_msg: "",
  debug: false,
}

const configure = (_setting) => {
  _setting.debug = argv.debug || argv._.find(arg => arg==='--debug')

  // debugLogger("args: " + process.argv)
  debugLogger("args: ")
  if (_setting.debug) {
    console.log(argv)
  }

  if (argv._.length===0) {
    _setting.error = true
    _setting.error_msg = `Please give project name.\n\n${colorStr('Pattern: ','info')}npm init vitawind {project-name} -- {template}`
    return
  }

  _setting.project_name = argv._[0]
  if (!isValidPackageName(_setting.project_name)) {
    _setting.project_name = toValidPackageName(_setting.project_name)
  }

  let element = ''
  if (argv.vue || argv._.find(arg => arg==='--vue')) element = 'vue'
  else if (argv['vue-ts'] || argv._.find(arg => arg==='--vue-ts')) element = 'vue-ts'
  else if (argv.react || argv._.find(arg => arg==='--react')) element = 'react'
  else if (argv['react-ts'] || argv._.find(arg => arg==='--react-ts')) element = 'react-ts'
  else if (argv.vuecli || argv._.find(arg => arg==='--vuecli')) element = 'vuecli'
  else if (argv.cra || argv._.find(arg => arg==='--cra')) element = 'cra'
  else if (argv.ng || argv._.find(arg => arg==='--ng')) element = 'ng'
  else if (argv.v || argv._.find(arg => arg==='--version' || arg==='-v')) element = 'version'

  switch (element) {
    case 'vue':{
      _setting.template = "vite-vue"
      _setting.script = "dev"
      break
    }
    case 'react':{
      _setting.template = "vite-react"
      _setting.script = "dev"
      break
    }
    case 'vue-ts':{
      _setting.template = "vite-vue-ts"
      _setting.script = "dev"
      break
    }
    case 'react-ts':{
      _setting.template = "vite-react-ts"
      _setting.script = "dev"
      break
    }
    case 'vuecli':{
      _setting.template = "vuecli"
      _setting.script = "serve"
      break
    }
    case 'cra':{
      _setting.template = "cra"
      _setting.version = "v2.2"
      _setting.script = "start"
      break
    }
    // case 'cra214':{
    //   _setting.template = "cra"
    //   _setting.version = "v2.1.4"
    //   _setting.script = "start"
    //   break
    // }
    case 'ng':{
      _setting.template = "ng"
      _setting.script = "start"
      break
    }
    case 'version':{
      _setting.initial = false
      console.log(packageJson.version)
      return false
    }
  }

  if (!element) {
    _setting.error = true
    _setting.error_msg = `Please give a template type.\n\n${colorStr('Pattern: ','info')}npm init vitawind {project-name} -- {template}`
  } else if (!_setting.template) {
    _setting.error = true
    _setting.error_msg = `'${element}' isn't a valid template.\n\n${colorStr('Pattern: ','info')}For more information, see https://vitawind-blog.vercel.app/scaffolding/templates.html`
  }
  return true
}

function isValidPackageName(projectName) {
  return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(
    projectName
  )
}

function toValidPackageName(projectName) {
  return projectName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/^[._]/, '')
    .replace(/[^a-z0-9-~]+/g, '-')
}

const getTemplateFullname = ( template, version ) => {
  if (version) {
    return `template-${template}-tailwind-jit-${version}`
  } else {
    return `template-${template}-tailwind-jit`
  }
}

const write = (file,content,_setting) => {
  let src = path.join(__dirname, getTemplateFullname(_setting.template,_setting.version), file)
  let dist = cwd.concat(`/${_setting.project_name}/${file.replace('../gitignore','.gitignore')}`)
  if (content) {
    fs.writeFileSync(dist,content)
  } else {
    if (dirExist(path.dirname(dist))) {
      fs.copyFileSync(src,dist)
    }
  }
}

const dirExist = (path) => {
  if (fs.existsSync(path)) {
    return true
  } else {
    fs.mkdirSync(path,{recursive:true})
    if (fs.existsSync(path)) {
      return true
    } else {
      return false
    }
  }
}

const isEmpty = (path) => {
  const files = fs.readdirSync(path)
  debugLogger(`files in directory '${path}': `+ files)
  return files.length===0
}

const colorStr = (string,type='normal') => {
  const color = {
    success:'\x1b[32m',
    info:'\x1b[33m',
    error:'\x1b[31m',
    normal: '\x1b[37m',
  }
  return color[type].concat(string).concat(color.normal)
}

const creator = (_setting) => {
  if (_setting.error) return

  // Windows Can Run, But linux based can't
  // const src = pkgPath.concat(`/${getTemplateFullname(_setting.template,_setting.version)}`)
  // and this can get correct path.
  const src = path.join(__dirname, getTemplateFullname(_setting.template,_setting.version))
  // const dist = cwd.concat(`/${_setting.project_name}`)
  if (dirExist(_setting.project_name)) {
    if (isEmpty(_setting.project_name)){
      if (!fs.existsSync(src)) {
        _setting.error = true
        _setting.error_msg = 'Target template is not exist. To help us improving this package, please visit https://github.com/huibizhang/vitawind/issues.'
        debugLogger("source template path: " + src)
        return
      }

      const template = rread(src)
      template.push('../gitignore')
      debugLogger("files in template: " + template)
      
      template
        .filter((filename) => filename.indexOf('package-lock.json')===-1 && filename.indexOf('yarn.lock')===-1 && filename.indexOf('node_modules')===-1)
        .forEach((file) => {
          write(file,undefined,_setting)
        })

      console.log(
        `${colorStr('Template created.','success')}\n\n`,
        `Now do following steps:\n\n`,
        `> ${colorStr('cd','info')} ${_setting.project_name}\n`,
        `> ${colorStr('npm','info')} install  (or \`yarn\`)\n`,
        `> ${colorStr('npm','info')} run ${_setting.script}  (or \`yarn ${_setting.script}\`)\n`
      )
    } else {
      _setting.error = true
      _setting.error_msg = 'Directory is not empty.'
    }
  } else {
    _setting.error = true
    _setting.error_msg = 'Unknown error. To help us improving this package, please visit https://github.com/huibizhang/vitawind/issues.'
  }
}

const debugLogger = (msg) => {
  if(setting.debug){
    console.log(colorStr('','normal'),msg)
  }
}


const reader = configure(setting)
debugLogger(setting)

if(!reader)
  return

creator(setting)

if (setting.error) {
  console.log(`${colorStr(`\nError: ${setting.error_msg}`,'error')}\n`)
}