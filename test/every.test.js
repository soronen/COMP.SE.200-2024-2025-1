import { expect } from 'chai';
import every from '../src/every.js'

describe('every', () => {
  it('returns false if not all values are true', () => {
    expect(every([true, 1, null, 'yes'], Boolean)).to.equal(false)
  })
  it('returns true if all values are true', () => {
    expect(every([true, 1, 'yes'], Boolean)).to.equal(true)
  })
  it('returns true for an empty array', () => {
    expect(every([], Boolean)).to.equal(true);
  })
  it('stops iteration once a false value is encountered', () => {
    let count = 0;
    const predicate = (value) => {
      count++;
      return Boolean(value);
    }
    every([true, false, true], predicate)
    expect(count).to.equal(2)
  })
});