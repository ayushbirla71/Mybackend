#! /bin/env node

import _ from 'lodash/fp';
import tailN from './';

const [file, n] = process.argv.slice(2);

tailN(file, +n || 10)
  .then(_.forEach(console.log))
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
