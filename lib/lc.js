const benchmark = require('benchmark');
const benchmarks = require('beautify-benchmark');

const CYCLE = 'cycle';
const COMPLETE = 'complete';

const suite = new benchmark.Suite();

function add(functionToRun, numberRunSampled) {
  suite.add({
    name: functionToRun.name,
    minSamples: numberRunSampled,
    initCount: 1,
    minTime: -Infinity,
    maxTime: -Infinity,
    fn: functionToRun,
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
