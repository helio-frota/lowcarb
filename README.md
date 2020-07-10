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

**Required** to create benchmark directory:

```console
mkdir benchmark
touch benchmark/foo.js
```

Your `foo.js` file:

```js
const lowCarb = require('lowcarb');
const shake = require('../index');

lowCarb.add(shake.wheyProtein, 10);
lowCarb.add(shake.wheyProtein, 200);
lowCarb.add(shake.wheyProtein, 3000);
lowCarb.run();
```

Your `index.js` file (which contains the function you want to 'workout'):

```js
function wheyProtein() {
  'creatine' + JSON.stringify('bcaa');
}

module.exports = {
  wheyProtein
}
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
