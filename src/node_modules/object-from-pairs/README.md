# object from pairs

Create an object from an array of pairs

Can be used as a partial [ponyfill](https://github.com/sindresorhus/ponyfill) or [prollyfil](https://kikobeats.com/polyfill-ponyfill-and-prollyfill/) for [tc39 / proposal-object-from-entries](https://github.com/tc39/proposal-object-from-entries)

**Author:** [@brodybits (Christopher J. Brody)](https://github.com/brodybits)

**License:** CC0 OR UNLICENSE OR ISC OR Apache-2.0 OR CC-BY-SA-3.0 OR CC-BY-SA-4.0

## Sample

```js
const objectFromPairs = require('object-from-pairs')

console.log(objectFromPairs([
  [ 'first' + 'Key',        'first value' ],
  [ 'second' + '-' + 'key', 'second value' ],
]))
```

outputs the following:

```js
{ firstKey: 'first value', 'second-key': 'second value' }
```

(see [quick-demo.js](./quick-demo.js))

## TODO

- deeper testing
- proper API documentation
- use eslint-config-standard@12 when available (<https://github.com/standard/eslint-config-standard/issues/123>)
- follow standard more closely in quick-demo.js and sample
- pre-es6 support
- test on browser
- test on AppVeyor & Travis CI
- SauceLabs?
- commit `package-lock.json` (??)

## FUTURE TBD

- merge with the now deprecated <https://npm.im/object-from-entries> package?

## See also

- <https://npm.im/object-from-entries> (deprecated ponyfill)
- <https://npm.im/object.fromentries> (polyfill for ES Object.fromEntries proposal)
- <https://humanwhocodes.com/blog/2010/03/02/maintainable-javascript-dont-modify-objects-you-down-own/> - nice justification for [ponyfill](https://github.com/sindresorhus/ponyfill) over [polyfills](https://www.w3.org/2001/tag/doc/polyfills/)
- <https://lodash.com/docs/4.17.10#fromPairs>
- <https://github.com/lodash/lodash/issues/2718>
- <https://github.com/lodash/lodash/issues/1261>
- <https://stackoverflow.com/questions/20059995/how-to-create-an-object-from-an-array-of-key-value-pairs>
- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries>
- <https://hackernoon.com/es8-was-released-and-here-are-its-main-new-features-ee9c394adf66>
