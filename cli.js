#!/usr/bin/env node
var exec = require('child_process').exec;

module.exports = function() {

  console.log("starting vitailwind initialize...\n\n");

  var cmd = exec(`npx tailwind init -p`, function(err, stdout, stderr) {
    if (err) {
      // handle error
      console.log("From Plugin - " + err);
    }

    if(stderr){
      console.log('\x1b[31m' + "Error:" + stderr,'\x1b[37m');
    }

    console.log(stdout);
  });

  cmd.on('exit', function (code) {
      // return value from "npm build"
      //console.log("code:" + code);
      if(code==1){
        //console.log('\x1b[31m' + `Tailwind watcher stopped.`,'\x1b[37m');
      }
  });

  return {}
}