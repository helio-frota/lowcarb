#!/usr/bin/env node

const fs = require('fs')
const { join } = require('path')
const mkdirp = require('mkdirp')
const spawn = require('child_process').spawn
const cwd = process.cwd()
const exe = process.argv[0]

const BENCH = 'benchmark'
const TEMPLATES = join(__dirname, '..', 'templates')
const write = (file, str) => fs.writeFileSync(file, str)
const copyTemplate = (from, to) => {
  write(to, fs.readFileSync(join(TEMPLATES, from), 'utf-8'))
}

const run = (fileNames) => {
  const fileName = fileNames.shift()

  if (!fileName) {
    return
  }

  if (!/\.js$/i.test(fileName)) {
    return run(fileNames)
  }

  const fullPath = join(cwd, `${BENCH}/${fileName}`)
  spawn(exe, [fullPath], { stdio: 'inherit' }).on('exit', (_) =>
    run(fileNames)
  )
}

const benchDIR = join(cwd, BENCH)
if (!fs.existsSync(benchDIR)) {
  mkdirp.sync(benchDIR)
  copyTemplate('workout.js', join(benchDIR, 'workout.js'))
  copyTemplate('delete-me-later.js', join(benchDIR, 'delete-me-later.js'))
}

run(fs.readdirSync(join(cwd, BENCH)))
