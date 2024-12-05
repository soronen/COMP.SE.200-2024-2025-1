import { expect } from 'chai';
import endsWith from '../src/endsWith.js'

describe('endsWith', () => {
  it('Return true if last character in string is same as is the target', () => {
    expect(endsWith('abc', 'c')).to.equal(true)
  })
  it('Return false if last character in string is not same as is the target', () => {
    expect(endsWith('abc', 'b')).to.equal(false)
  })
  it('Return true if character in string is same as is the target in specified position', () => {
    expect(endsWith('abc', 'b', 2)).to.equal(true)
  })
  it('Return true if multiple character in string is same as is the target that have multiple target in specified position', () => {
    expect(endsWith('abc', 'bc', 3)).to.equal(true)
  })
  it('Return false if character in string is not same as is the target in specified position', () => {
    expect(endsWith('abc', 'b', 3)).to.equal(false)
  })
  it('Return false if position is negative', () => {
    expect(endsWith('abc', 'a', -1)).to.equal(false)
  })
  it('Return false if position is 0', () => {
    expect(endsWith('abc', 'a', 0)).to.equal(false)
  })
  it('Return error if string is null', () => {
    expect(() => endsWith(null, 'n', 1)).to.Throw()
  })
  it('reconize empty space', () => {
    expect(endsWith('a c', '', 2)).to.equal(true)
  })
  it('should not reconize array characthers', () => {
    expect(endsWith(['a', 'b', 'c'], 'b', 2)).to.equal(false)
  })
  it('should not reconize array numbers', () => {
    expect(endsWith([1, 2, 3], 2, 2)).to.equal(false)
  })
});