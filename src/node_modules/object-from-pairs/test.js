const test = require('tape')

const objectFromPairs = require('./index.js')

// THANKS for guidance:
// - https://ci.testling.com/guide/tape
// - https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4

test('Create an object from two pairs', (t) => {
  t.deepEqual(objectFromPairs([
    [ 'first' + 'Key', 'first value' ],
    [ 'second' + '-' + 'key', 'second value' ]
  ]), {
    'firstKey': 'first value',
    'second-key': 'second value'
  }, 'as')

  t.end()
})
