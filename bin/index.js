#!/usr/bin/env node

const fs = require('fs');
const { join } = require('path');
const spawn = require('child_process').spawn;
const cwd = process.cwd();
const exe = process.argv[0];

const run = (fileNames) => {
  const fileName = fileNames.shift();

  if (!fileName) {
    return;
  }

  if (!/\.js$/i.test(fileName)) {
    return run(fileNames);
  }
 
  const fullPath = join(cwd, `benchmark/${fileName}`);
  spawn(exe, [fullPath], { stdio: 'inherit' }).on('exit', (_) =>
    run(fileNames)
  );
};

run(fs.readdirSync(join(cwd, 'benchmark')));
