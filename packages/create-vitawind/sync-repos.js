const { execSync } = require('child_process');
const fs = require('fs');

const from = "huibizhang"

const repos = [
  "template-vite-vue-tailwind-v3",
  "template-vite-vue-ts-tailwind-v3",
  "template-vite-react-tailwind-v3",
  "template-vite-react-ts-tailwind-v3",
  "template-cra-tailwind-v3",
  "template-ng-tailwind-v3",
]

repos.forEach(repo => {
  if(fs.existsSync(repo)){
    fs.rmdirSync(repo, { recursive: true, force: true })
    console.log(`removed repo '${repo}'`)
  }
  console.log(`sync repo '${repo}'`)
  execSync(`git clone git@github.com:${from}/${repo}.git\ncd ${repo}\nrm -rf .git`)
})