import { expect } from 'chai';
import divide from '../src/divide.js'

describe('divide', () => {
  it('divides two positive numbers with whole result', () => {
    expect(divide(50, 10)).to.equal(5)
  })
  it('divides whole numbers with decimal result', () => {
    expect(divide(50, 11)).to.be.closeTo(4.545, 0.0001)
  })
  it('divides two negative numbers', () => {
    expect(divide(-50, -5)).to.equal(10)
  })
  it('divides two numbers with decimals', () => {
    expect(divide(7.5, 3.0).to.be.closeTo(2.5, 0.0001))
  })
  it('divides two numbers in scientific notation', () => {
    expect(divide(6e3, 3e1)).to.equal(200)
  })
  it('doesn\'t divide by zero', () => {
    expect(divide(6, 0)).to.deep.equal(NaN)
  })
  it('returns NaN if one number is NaN', () => {
    expect(divide(6, NaN)).to.deep.equal(NaN)
  })
});
