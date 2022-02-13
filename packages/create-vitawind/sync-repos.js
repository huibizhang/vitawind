#!/usr/bin/env node
const { execSync } = require("child_process");
const fs = require("fs");
var argv = require("minimist")(process.argv.slice(2));

// console.log(argv)

const from = "huibizhang";

const v1_repos = [
  "template-vite-vanilla-tailwind-jit",
  "template-vite-vue-tailwind-jit",
  "template-vite-vue-ts-tailwind-jit",
  "template-vite-react-tailwind-jit",
  "template-vite-react-ts-tailwind-jit",
  "template-vuecli-tailwind-jit",
  "template-vuecli5-tailwind-jit",
  "template-cra-tailwind-jit",
  "template-ng-tailwind-jit",
];
const v2_repos = [
  "template-vite-vanilla-tailwind-v3",
  "template-vite-vue-tailwind-v3",
  "template-vite-vue-ts-tailwind-v3",
  "template-vite-react-tailwind-v3",
  "template-vite-react-ts-tailwind-v3",
  "template-cra-tailwind-v3",
  "template-ng-tailwind-v3",
];

const reops = argv.v1 ? v1_repos : v2_repos;

reops.forEach((repo) => {
  if (fs.existsSync(repo)) {
    fs.rmSync(repo, { recursive: true, force: true });
    console.log(`removed repo '${repo}'`);
  }
  console.log(`sync repo '${repo}' ...`);

  const clearGit = `cd ${repo}\nrm -rf .git`;

  execSync(
    [
      `git clone git@github.com:${from}/${repo}.git`,
      argv.clear_git && clearGit,
    ]
      .filter((e) => e)
      .join("\n")
  );
});
