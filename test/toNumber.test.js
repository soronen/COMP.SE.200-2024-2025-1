import { expect } from 'chai';
import toNumber from '../src/toNumber.js';

describe('toNumber', () => {
  it('should return a number when given a number', () => {
    expect(toNumber(-1)).to.equal(-1);
    expect(toNumber(0)).to.equal(0);
    expect(toNumber(3)).to.equal(3);
    expect(toNumber(3.2)).to.equal(3.2);
  });
  it('should return a number when given a string', () => {
    expect(toNumber('-1')).to.equal(-1);
    expect(toNumber('0')).to.equal(0);
    expect(toNumber('3')).to.equal(3);
    expect(toNumber('3.2')).to.equal(3.2);
  });
  it('should return NaN when given an object', () => {
    const result = toNumber({});
    expect(result).to.be.NaN;
  });
  it('should return NaN when given an function', () => {
    const result = toNumber(() => { });
    expect(result).to.be.NaN;
  });
  it('should return NAN when given a symbol', () => {
    const result = toNumber(Symbol());
    expect(result).to.be.NaN;
  });

  it('should return NaN if given an non-number string', () => {
    expect(toNumber('abc')).to.be.NaN;
  });

  it('should return -0 when given 0 according to the  IEEE 754 standard', () => {
    expect(toNumber('-0')).to.be.equal(-0);
    expect(toNumber(-0)).to.be.equal(-0);
  });
});