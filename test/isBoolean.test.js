import { expect } from 'chai';
import isBoolean from '../src/isBoolean.js'

describe('isBoolean', () => {
  it('recognizes true', () => {
    expect(isBoolean(true)).to.equal(true)
  })
  it('recognizes false', () => {
    expect(isBoolean(false)).to.equal(true)
  })
  it('doesn\'t recognize a truthy value', () => {
    expect(isBoolean(1)).to.equal(false)
  })
  it('doesn\'t recognize a string', () => {
    expect(isBoolean('true')).to.equal(false)
  })
  it('doesn\'t recognize a falsy value', () => {
    expect(isBoolean(0)).to.equal(false)
  })
  it('doesn\'t recognize a string', () => {
    expect(isBoolean('false')).to.equal(false)
  })
});
