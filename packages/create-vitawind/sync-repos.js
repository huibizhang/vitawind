const { execSync } = require('child_process');

const from = "huibizhang"

const repos = [
  "template-vite-vanilla-tailwind-jit",
  "template-vite-vue-tailwind-jit",
  "template-vite-vue-ts-tailwind-jit",
  "template-vite-react-tailwind-jit",
  "template-vite-react-ts-tailwind-jit",
  "template-vuecli-tailwind-jit",
  "template-vuecli5-tailwind-jit",
  "template-cra-tailwind-jit",
  "template-ng-tailwind-jit",
]

repos.forEach(repo => {
  console.log(`sync repo '${repo}'`)
  execSync(`git clone git@github.com:${from}/${repo}.git\ncd ${repo}\nrm -rf .git`)
})