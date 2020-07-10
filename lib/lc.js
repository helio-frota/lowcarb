const benchmark = require('benchmark');
const benchmarks = require('beautify-benchmark');

const CYCLE = 'cycle';
const COMPLETE = 'complete';

const suite = new benchmark.Suite();

function check(f, n) {
  if (!f) {
    throw Error('You need to provide a function.');
  }
  if (!f.name) {
    throw Error('You can not use anonymous function.');
  }
  if (!Number.isFinite(n)) {
    throw TypeError('Please provide a Number for amount of sampled.');
  }
}

function add(f, n) {
  check(f, n);
  suite.add({
    name: f.name,
    minSamples: n,
    initCount: 1,
    minTime: -Infinity,
    maxTime: -Infinity,
    fn: f,
  });
}

function run() {
  suite.on(CYCLE, function onCycle(event) {
    benchmarks.add(event.target);
  });
  suite.on(COMPLETE, function onComplete() {
    benchmarks.log();
  });
  suite.run({ async: false });
}

module.exports = {
  add,
  run,
};
