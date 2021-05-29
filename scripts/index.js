var exec = require('child_process').exec;

module.exports = function() {

  console.log('Tailwind TEST');

  var cmd = exec(`npx tailwind init -p`, function(err, stdout, stderr) {
    if (err) {
      // handle error
      if(!/postcss/g.test(err)){
        console.log("From Plugin - " + err);
      }
    }

    if(stderr){
      if(/postcss/g.test(stderr)){
        console.log('\x1b[31m' + "Error: postcss not found or not installed.",'\x1b[37m');
      }else{
        console.log('\x1b[31m' + "Error:" + stderr,'\x1b[37m');
      }
    }

    if(!err && !stderr){
      console.log(
        '\x1b[33m%s\x1b[0m' + "warn",
        '\x1b[37m' + "- You have enabled the JIT engine which is currently in preview.\n",
        '\x1b[33m%s\x1b[0m' + "warn",
        '\x1b[37m' + "- Preview features are not covered by semver, may introduce breaking changes, and can change at any time."
      )
    }

    console.log(stdout);
  });

  cmd.on('exit', function (code) {
      // return value from "npm build"
      //console.log("code:" + code);
      if(code==1){
        console.log('\x1b[31m' + `Tailwind watcher stopped.`,'\x1b[37m');
      }
  });

  return {}
}