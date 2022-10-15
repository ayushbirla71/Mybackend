import path from 'path';
import _ from 'lodash/fp';
import should from 'should';
import sinon from 'sinon';
import tailN from '../src';

describe('tail -n', function () {
  it('one line', async function () {
    await tailN(path.join(__dirname, 'fixtrues/single-line.txt'))
      .should.be.fulfilledWith(['abc中文cddaaa']);
  });

  it('multi line', async function () {
    await tailN(path.join(__dirname, 'fixtrues/multi-lines.txt'))
      .should.be.fulfilledWith([
        'huang he yuan shang baiyun jian',
        '黄河远上白云间，',
        'qian li jiang lin yi ri huan',
        '千里江陵一日还。'
      ]);
  });

  it('default value 10', async function () {
    await tailN(path.join(__dirname, 'fixtrues/default.txt'))
      .should.be.finally.have.length(10);
  });

  it('n lines', async function () {
    await tailN(path.join(__dirname, 'fixtrues/default.txt'), 11)
      .should.be.finally.have.length(11);
  });
});

