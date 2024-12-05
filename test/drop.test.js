import { expect } from 'chai';
import drop from '../src/drop.js'

describe('drop', () => {
  it('Should return second element if not given number of elements to drop', () => {
    expect(drop([2, 1])).to.deep.equal([1])
  })
  it('Should return last element if array size -1', () => {
    expect(drop([2, 1, 3], 2)).to.deep.equal([3])
  })
  it('Should return empty array if array size +1', () => {
    expect(drop([2, 1, 3], 4)).to.deep.equal([])
  })
  it('Should return whole array if number is NaN', () => {
    expect(drop([2, 1, 3], NaN)).to.deep.equal([2, 1, 3])
  })
  it('Should return empty array if array is null', () => {
    expect(drop(null, 2)).to.deep.equal([])
  })
  it('Should return empty array if array is undefined', () => {
    expect(drop(undefined, 2)).to.deep.equal([])
  })
  it('Should return empty array if array is NaN', () => {
    expect(drop(NaN, 2)).to.deep.equal([])
  })
  it('Should return empty array if array and number is null', () => {
    expect(drop(null, null)).to.deep.equal([])
  })
});