// Import the necessary parts from Chai
import { expect } from 'chai';
import add from '../src/add.js'; // Adjust the path if necessary

describe('add', () => {
  it('should add two positive numbers', () => {
    expect(add(6, 4)).to.equal(10);
  });

  it('should add a positive and a negative number', () => {
    expect(add(6, -4)).to.equal(2);
  });

  it('should add two negative numbers', () => {
    expect(add(-6, -4)).to.equal(-10);
  });

  it('should return the other number when adding zero', () => {
    expect(add(6, 0)).to.equal(6);
    expect(add(0, 4)).to.equal(4);
  });

  it('should add two decimal numbers', () => {
    expect(add(1.5, 2.5)).to.equal(4);
  });
});
