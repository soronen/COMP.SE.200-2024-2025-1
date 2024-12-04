import { expect } from 'chai';
import isTypedArray from '../src/isTypedArray.js';

describe('isTypedArray', () => {
  it('should return true for Float32Array', () => {
    expect(isTypedArray(new Float32Array(2))).to.be.true;
  });

  it('should return true for Int8Array', () => {
    expect(isTypedArray(new Int8Array(2))).to.be.true;
  });

  it('should return true for Uint8Array', () => {
    expect(isTypedArray(new Uint8Array(2))).to.be.true;
  });

  it('should return false for regular arrays', () => {
    expect(isTypedArray([])).to.be.false;
    expect(isTypedArray([1, 2, 3])).to.be.false;
  });

  it('should return for regular allays filled with values', () => {
    expect(isTypedArray(["hello", 2, false])).to.be.false;
    expect(isTypedArray([1, 2.555, 3])).to.be.false;
  });

  it('should return for regular allays filled with the same value', () => {
    expect(isTypedArray(["hello", "hello"])).to.be.false;
    expect(isTypedArray([1, 2, 3])).to.be.false;
  });

  it('should return false for null and undefined', () => {
    expect(isTypedArray(null)).to.be.false;
    expect(isTypedArray(undefined)).to.be.false;
  });

  it('should return false for non-array values', () => {
    expect(isTypedArray({})).to.be.false;
    expect(isTypedArray('array')).to.be.false;
    expect(isTypedArray(42)).to.be.false;
  });
});