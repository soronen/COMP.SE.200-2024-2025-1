import { expect } from 'chai';
import at from '../src/at.js'

describe('at', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
  it('Retrieves corret value from spacified path', () => {
    expect(at(object, ['a[1]'])).to.deep.equal([4])
  })
  it('Retrieves corret values from multiple spacified paths', () => {
    expect(at(object, ['a[0].b.c', 'a[1]'])).to.deep.equal([3, 4])
  })
  it('Correctly handles deeply nested paths', () => {
    expect(at(object, ['a[0].b.c'])).to.deep.equal([3]);
  });
  it('Retrieves undefined from undefined path', () => {
    expect(at(object, ['a[2]'])).to.deep.equal([undefined])
  })
  it('Retrieves undefined from null object', () => {
    expect(at(null, ['a[1]'])).to.deep.equal([undefined])
  })
  it('Returns empty array from object if no paths given', () => {
    expect(at(object)).to.deep.equal([])
  })
  it('Returns empty array from wrong object', () => {
    expect(at('a[0].b.c')).to.deep.equal([])
  })
});