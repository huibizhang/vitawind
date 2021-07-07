
var exec = require('child_process').exec;
// var tailwind = require("tailwindcss");
// var autoprefixer = require("autoprefixer");
// var postcss = require("postcss");
// var postcssCli = require("postcss-cli");

module.exports = function( tailwindCSS = 'tailwind.css', outputCSS = './src/index.css' ) {

  console.log('\x1b[33m%s\x1b[0m',"TailwindCSS",'\x1b[37m', "is now watching ...");

  const reg = /(\w+)\.(\w+)/g
  const re1 = new RegExp(reg)
  const re2 = new RegExp(reg)

  let errorFile = []
  let haveError = false;
  
  if(!re1.test(tailwindCSS)){
    haveError = true
    errorFile.push(tailwindCSS)
  }
  if(!re2.test(outputCSS)){
    haveError = true
    errorFile.push(outputCSS)
  }

  if(haveError){
    for(i=0;i<errorFile.length;i++){
      console.log('\x1b[31m' + `FileNameError: ${errorFile[i]}.`);
    }
    console.log('\x1b[31m' + `Tailwind watcher stopped.`);
    return {}
  }else{
    // console.log(
    //   `FileChecked: ${tailwindCSS}\n`,
    //   `FileChecked: ${outputCCS}\n`
    // );
  }

  // console.log(`tailwindcss -i ${tailwindCSS} -o ${outputCSS} -w`)

  var cmd = exec(`tailwindcss -i ${tailwindCSS} -o ${outputCSS} -w`, function(err, stdout, stderr) {
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
