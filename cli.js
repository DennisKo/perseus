#!/usr/bin/env node

const fs = require("fs-extra");
const { version } = require("./package.json");
const { execSync } = require("child_process");

const dir = process.argv[2];

console.log(`Creating application in ./${dir} ...`);

fs.copySync("./packages", `./${dir}`, {
  overwrite: false,
  errorOnExist: true
});

console.log(`Installing dependencies...`);

execSync(`yarn`, {
  cwd: dir,
  stdio: "inherit"
});

console.log(
  `All done! Use "cd ${dir} && yarn dev" to start the development environment`
);
