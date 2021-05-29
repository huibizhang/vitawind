#!/usr/bin/env node
var exec = require('child_process').exec;
var fs = require('fs')

function init() {
  var cmd = exec(`npx tailwind init -p`, function(err, stdout, stderr) {
    if (err) {
      // handle error
      if(!/already exists/g.test(err)){
        console.log("From Plugin - " + err);
      }
    }

    if(stderr){
      console.log('\x1b[31m' + "Error:" + stderr,'\x1b[37m');
    }

    console.log(stdout);

    if(!err && !stderr){
      fs.writeFile(
        './tailwind.css',
        '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n',
        function (error) {
          if(error){
            console.log(error)
          }else{
            console.log('\x1b[33m' + "Create file:" + '\x1b[37m' + " tailwind.css\n")
          }
      })
    }
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

console.log('\n\x1b[32m' + 'Starting vitailwind initialize...','\x1b[37m');
init();