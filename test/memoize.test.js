import { expect } from 'chai';
import memoize from '../src/memoize.js';

describe('memoize', () => {
  const object = { 'a': 1, 'b': 2 }
  const other = { 'c': 3, 'd': 4 }
  const values = memoize(Object.values)
  const sum = (a, b) => a + b;


  it('should return [1, 2]', () => {
    const result = values(object);
    expect(result).to.deep.equal([1, 2]);
  });

  it('should return [3, 4]', () => {
    const result = values(other);
    expect(result).to.deep.equal([3, 4]);
  });

  it('should throw an error when the input is not a function', () => {
    expect(() => memoize('string')).to.throw(TypeError);
  });

  it('should throw an error when the resolver is not a function', () => {
    expect(() => memoize(() => { }, 'string')).to.throw(TypeError);
  });

  it('memozie function cache should have a key after memoize call', () => {
    const result = values(object);
    expect(values.cache.has(object)).to.equal(true);
  });

  it('should use the cache after the first call', () => {
    let dynamic_object = { 'a': 1, 'b': 2 }
    expect(values(dynamic_object)).to.deep.equal([1, 2]);
    dynamic_object.a = 2;
    expect(values(dynamic_object)).to.deep.equal([1, 2]);
  });

  it('should use resolver to generate cache key', () => {
    const resolver = (...args) => args.join('-');
    const memoizedSum = memoize(sum, resolver);

    expect(memoizedSum(1, 2)).to.equal(3);
    expect(memoizedSum.cache.has('1-2')).to.equal(true);
  });

});