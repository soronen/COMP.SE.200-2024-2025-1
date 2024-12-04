import { expect } from 'chai';
import isTypedArray from '../src/isTypedArray.js';

describe('isTypedArray', () => {

  it('should return true for Float64Array', () => {
    expect(isTypedArray(new Float64Array(2))).to.be.true;
  });

  it('should return true for Int32Array', () => {
    expect(isTypedArray(new Int32Array(2))).to.be.true;
  });

  it('should return true for Uint8ClampedArray', () => {
    expect(isTypedArray(new Uint8ClampedArray(2))).to.be.true;
  });

  it('should return true for Uint16Array', () => {
    expect(isTypedArray(new Uint16Array(2))).to.be.true;
  });

  it('should return false for ArrayBuffer', () => {
    expect(isTypedArray(new ArrayBuffer(2))).to.be.false;
  });

  it('should return false for regular arrays', () => {
    expect(isTypedArray([])).to.be.false;
    expect(isTypedArray([1, 2, 3])).to.be.false;
  });

  it('should return false for undefined', () => {
    expect(isTypedArray(null)).to.be.false;
    expect(isTypedArray(undefined)).to.be.false;
  });

  it('should return false for non-array values', () => {
    expect(isTypedArray({})).to.be.false;
    expect(isTypedArray(() => { })).to.be.false;
    expect(isTypedArray(new Date())).to.be.false;
    expect(isTypedArray('notarray')).to.be.false;
    expect(isTypedArray(true)).to.be.false;
  });
});