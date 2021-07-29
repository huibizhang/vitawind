#!/usr/bin/env node
var exec = require('child_process').exec
const fs = require('fs')
const path = require('path')
const cwd = process.cwd()
const pkgPath = path.resolve(process.argv[1])
const rread = require('fs-readdir-recursive')

const setting = {
  project_name: '',
  dist_path: cwd,
  template: '',
  version: '',
  script: '',
  error: false,
  error_msg: "",
}

const configure = (_setting) => {
  var args = process.argv
  _setting.project_name = args[2]
  args.forEach((element,index,array) => {
    if (index < 3) return

    switch (element) {
      case '--vue':{
        _setting.template = "vite-vue"
        _setting.script = "dev"
        break
      }
      case '--react':{
        _setting.template = "vite-react"
        _setting.script = "dev"
        break
      }
      case '--vuecli':{
        _setting.template = "vuecli"
        _setting.script = "serve"
        break
      }
      case '--cra':{
        _setting.template = "cra"
        _setting.version = "v2.1.4"
        _setting.script = "start"
        break
      }
      case '--cra22':{
        _setting.template = "cra"
        _setting.version = "v2.2"
        _setting.script = "start"
        break
      }
      case '--ng':{
        _setting.template = "ng"
        _setting.script = "start"
        break
      }
      case 'version':{
        _setting.initial = false
        console.log(packageJson.version)
      }
    }

    if (!element) {
      _setting.error = true
      _setting.error_msg = "Please give a template type."
    } else if (!_setting.template) {
      _setting.error = true
      _setting.error_msg = `'${element}' isn't a valid template.`
    }
  })
}

const getTemplateFullname = ( template, version ) => {
  if (version) {
    return `template-${template}-tailwind-jit-${version}`
  } else {
    return `template-${template}-tailwind-jit`
  }
}

const write = (file,content,_setting) => {
  let src = pkgPath.concat(`/${getTemplateFullname(_setting.template,_setting.version)}/${file}`)
  let dist = cwd.concat(`/${_setting.project_name}/${file}`)
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
  // console.log(files)
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

  const src = pkgPath.concat(`/${getTemplateFullname(_setting.template,_setting.version)}`)
  const dist = cwd.concat(`/${_setting.project_name}`)
  if (dirExist(_setting.project_name)) {
    if (isEmpty(_setting.project_name)){
      if (!fs.existsSync(src)) {
        _setting.error = true
        _setting.error_msg = 'Target template is not exist.'
        return
      }
      
      const template = rread(src)
      // console.log(template)

      template
        .filter((filename) => filename.indexOf('package-lock.json')===-1 && filename.indexOf('yarn.lock')===-1)
        .forEach((file) => {
          write(file,undefined,_setting)
        })
      console.log(
        `${colorStr('Template created.','success')}\n\n`,
        `Now you need to do following steps:\n\n`,
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
    _setting.error_msg = 'Unknown error.'
  }
}


configure(setting)
// console.log(setting)

creator(setting)

if (setting.error) {
  console.log(`${colorStr(`\nError: ${setting.error_msg}`,'error')}\n`)
}