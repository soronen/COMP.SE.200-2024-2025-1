import { expect } from 'chai';
import difference from '../src/difference.js'

describe('difference', () => {
  it('Should return one item from array that is not includet in the second array ', () => {
    expect(difference([2, 1], [2, 3])).to.deep.equal([1])
  })
  it('Should return empty array if all the items are includet in both arrays ', () => {
    expect(difference([2, 3], [2, 3])).to.deep.equal([])
  })
  it('Should return multiple item from array that is not includet in the second array ', () => {
    expect(difference([2, 1, 4, 5], [2, 3])).to.deep.equal([1, 4, 5])
  })
  it('Should return strings Hello world', () => {
    expect(difference(['abc', 'd', 'Hello', 'world'], ['abc', 'd'])).to.deep.equal(['Hello', 'world'])
  })
  it('Should return array that have null, undefined and NaN', () => {
    expect(difference([null, undefined, NaN, 2], [2, 3])).to.deep.equal([null, undefined, NaN])
  })
  it('Should return empty array if target is null', () => {
    expect(difference(null, [2, 3])).to.deep.equal([])
  })
  it('Should return empty array if target is undefined', () => {
    expect(difference(undefined, [2, 3])).to.deep.equal([])
  })
  it('Should return empty array if target is undefined', () => {
    expect(difference(NaN, [2, 3])).to.deep.equal([])
  })
  it('Should return first array as a whole if values is null', () => {
    expect(difference([2, 1], null)).to.deep.equal([2, 1])
  })
});