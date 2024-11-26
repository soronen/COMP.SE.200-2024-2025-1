import { expect } from 'chai';
import add from '../src/add.js';

describe('add', function () {
  it('should return the sum of two positive numbers', function () {
    expect(add(6, 4)).to.equal(10);
  });

  it('should return the sum of two negative numbers', function () {
    expect(add(-6, -4)).to.equal(-10);
  });

  it('should return the sum of a positive and a negative number', function () {
    expect(add(6, -4)).to.equal(2);
  });

  it('should return 0 when adding 0 to 0', function () {
    expect(add(0, 0)).to.equal(0);
  });

  it('should return the other number when adding 0 to a number', function () {
    expect(add(0, 5)).to.equal(5);
    expect(add(5, 0)).to.equal(5);
  });
});
