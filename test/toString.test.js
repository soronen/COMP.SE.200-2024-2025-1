import { expect } from 'chai';
import toString from '../src/toString.js';

// Mock the isSymbol function
const isSymbol = (value) => typeof value === 'symbol';

describe('toString', () => {
  it('should return an empty string for null', () => {
    expect(toString(null)).to.equal('');
  });

  it('should return an empty string for undefined', () => {
    expect(toString(undefined)).to.equal('');
  });

  it('should preserve the sign of -0', () => {
    expect(toString(-0)).to.equal('-0');
  });

  it('should convert arrays to a string', () => {
    expect(toString([1, 2, 3])).to.equal('1,2,3');
  });

  it('should handle nested arrays', () => {
    expect(toString([1, [2, [3]]])).to.equal('1,2,3');
  });

  it('should convert symbols to strings', () => {
    const symbol = Symbol('test');
    expect(toString(symbol)).to.equal(symbol.toString());
  });

  it('should convert numbers to strings', () => {
    expect(toString(42)).to.equal('42');
  });

  it('should convert strings to strings without changes', () => {
    expect(toString('hello')).to.equal('hello');
  });

  it('should convert objects to "[object Object]"', () => {
    expect(toString({})).to.equal('[object Object]');
  });

  it('should convert booleans to strings', () => {
    expect(toString(true)).to.equal('true');
    expect(toString(false)).to.equal('false');
  });

  it('should handle infinity and negative infinity', () => {
    expect(toString(Infinity)).to.equal('Infinity');
    expect(toString(-Infinity)).to.equal('-Infinity');
  });

  it('should convert BigInt to strings', () => {
    expect(toString(BigInt(123))).to.equal('123');
  });
});
