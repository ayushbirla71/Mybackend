[![Build Status](https://travis-ci.org/wmzy/tail-n.svg?branch=master)](https://travis-ci.org/wmzy/tail-n)
[![Coverage Status](https://coveralls.io/repos/github/wmzy/tail-n/badge.svg?branch=master)](https://coveralls.io/github/wmzy/tail-n?branch=master)
# tail-n

> `tail -n` write in nodejs.

## install

```bash
npm install tail-num
```

## Usage

### CLI

```bash
npx tail-num file-name [n]
```

### API

```javascript
import tailN from 'tail-num';

tailN('file-path')
  .then(lines => console.log(lines))

tailN('file-path', 100)
  .then(lines => console.log(lines))
```
