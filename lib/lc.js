const benchmark = require('benchmark');
const benchmarks = require('beautify-benchmark');

const START = 'start';
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
    initCount: 0, // https://benchmarkjs.com/docs#options_initCount
    minTime: -Infinity,
    maxTime: -Infinity,
    fn: f,
  });
}

function run(t, pr, a) {
  if (t) {
    suite.on(START, _ => console.log('\x1b[36m%s\x1b[0m', `--> ${t}`));
  }
  suite.on(CYCLE, function onCycle(event) {
    benchmarks.add(event.target);
  });
  suite.on(COMPLETE, function onComplete(event) {
    benchmarks.log();
    if (pr) {
      console.log('\x1b[36m%s\x1b[0m', 'Function executed again. The return value is:');
      console.log('\x1b[36m%s\x1b[0m', event.target.fn());
    }
  });
  suite.run({ async: a || false });
}

module.exports = {
  add,
  run,
};
