// This is the an example benchmark file that needs to be placed
// inside benchmark directory.
const lowCarb = require('lowcarb')

// Requiring the function we want to workout.
// Just delete the delete-me-later.js file and import/point to your
// source code here to test.
const shake = require('./delete-me-later')

lowCarb.add(shake.wheyProtein, 10)
lowCarb.add(shake.wheyProtein, 200)
lowCarb.add(shake.wheyProtein, 3000)
lowCarb.run()
