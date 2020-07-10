# lowcarb

A feature-basic benchmark.js wrapper to keep you with the pump without muscle loss.

Install:

```console
npm i lowcarb -D
```

Add this to `package.json`:

```js
"scripts": {
  "lowcarb": "lowcarb"
},
```

Run lowcarb:

```console
npm run lowcarb
```

Output:

```console
  3 tests completed.

  wheyProtein x 151,953 ops/sec ±2.56% (10 runs sampled)
  wheyProtein x 137,021 ops/sec ±8.45% (200 runs sampled)
  wheyProtein x 168,904 ops/sec ±1.39% (3000 runs sampled)
```


It will create:

1. A `benchmark` directory
2. A file `benchmark/workout.js`
2. A file `benchmark/delete-me-later.js`

`benchmark/workout.js` file:

```js
// This is the an example benchmark file that needs to be placed 
// inside benchmark directory.
const lowCarb = require('lowcarb');

// Requiring the function we want to workout.
// Just delete the delete-me-later.js file and import/point to your
// source code here to test.
const shake = require('../delete-me-later.js');

lowCarb.add(shake.wheyProtein, 10);
lowCarb.add(shake.wheyProtein, 200);
lowCarb.add(shake.wheyProtein, 3000);
lowCarb.run();
```

`benchmark/delete-me-later.js` file (which contains the function you want to 'workout'):

```js
// This file should be deleted.
function wheyProtein() {
  'creatine' + JSON.stringify('bcaa');
}

module.exports = {
  wheyProtein
}
```

