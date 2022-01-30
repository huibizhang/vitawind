const { execSync } = require('child_process');

const from = "huibizhang"

const repos = [
  "template-vite-vue-tailwind-v3",
  "template-vite-vue-ts-tailwind-v3",
  "template-vite-react-tailwind-v3",
  "template-vite-react-ts-tailwind-v3",
]

repos.forEach(repo => {
  console.log(`sync repo '${repo}'`)
  execSync(`git clone git@github.com:${from}/${repo}.git\ncd ${repo}\nrm -rf .git`)
})