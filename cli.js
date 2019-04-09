#!/usr/bin/env node
const { execSync } = require("child_process");
const fs = require("fs-extra");
const path = require("path");
const { version } = require("./package.json");

const rootDir = path.join(__dirname, ".");
const packagesDir = path.join(rootDir, "packages");
const currentDir = process.cwd();
const targetDir = `${currentDir}/${process.argv[2]}`;

execSync(`yarn`);

console.log(`Creating application in ${targetDir} ...`);

fs.copySync(packagesDir, targetDir, {
  overwrite: false,
  errorOnExist: true
});

console.log(`Installing dependencies...`);

execSync(`yarn`, {
  cwd: targetDir,
  stdio: "inherit"
});

console.log(
  `All done! Use "cd ${targetDir} && yarn dev" to start the development environment`
);
