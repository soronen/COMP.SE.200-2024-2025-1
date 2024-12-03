import { expect } from 'chai';
import add from '../src/add.js'

describe('add', () => {
  it('adds two positive numbers', () => {
    expect(add(6, 4)).to.equal(10)
  })
  it('adds two negative numbers', () => {
    expect(add(-6, -4)).to.equal(-10)
  })
  it('adds two floating point numbers', () => {
    expect(add(6.1, 4.2)).to.be.closeTo(10.3, 0.0001)
  })
  it('adds two numbers in scientific notation', () => {
    expect(add(6e2, 4e3)).to.equal(4600)
  })
  it('returns the other value if one number is NaN', () => {
    expect(add(6, NaN)).to.deep.equal(NaN)
  })
});
