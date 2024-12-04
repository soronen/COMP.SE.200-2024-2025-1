import { expect } from 'chai';
import castArray from '../src/castArray.js'

describe('castArray', () => {
  it('Should return [1] for 1', () => {
    expect(castArray(1)).to.deep.equal([1])
  })
  it('Should return [{ \'a\': 1 }] for { \'a\': 1 }', () => {
    expect(castArray({ 'a': 1 })).to.deep.equal([{ 'a': 1 }])
  })
  it('Should return [\'abc\'] for \'abc\'', () => {
    expect(castArray('abc')).to.deep.equal(['abc'])
  })
  it('Should return [null] for null', () => {
    expect(castArray(null)).to.deep.equal([null])
  })
  it('Should return [undefined] for undefined', () => {
    expect(castArray(undefined)).to.deep.equal([undefined])
  })
  it('Should return empty array for no arguments', () => {
    expect(castArray()).to.deep.equal([])
  })
  it('Should return same array that castArray function has get', () => {
    const array = [1, 2, 3]
    expect(castArray(array)).to.equal(array)
  })
});