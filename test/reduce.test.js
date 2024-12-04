import { expect } from 'chai';
import reduce from '../src/reduce.js';

describe('reduce', () => {
  it('should return 3', () => {
    const array = [1, 2];
    const result = reduce(array, (result, value, key) => result + value, 0);
    expect(result).to.equal(3);
  });

  it("should return { '1': ['a', 'c'], '2': ['b'] }", () => {
    const object = { 'a': 1, 'b': 2, 'c': 1 };
    const result = reduce(object, (result, value, key) => {
      (result[value] || (result[value] = [])).push(key)
      return result
    }, {})
    expect(result).to.deep.equal({ '1': ['a', 'c'], '2': ['b'] });
  });

});