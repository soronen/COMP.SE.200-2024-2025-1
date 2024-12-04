import { expect } from 'chai';
import filter from '../src/filter.js';


describe('filter', () => {
  it('should return objects for ["barney"]', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': false }
    ];
    const result = filter(users, ({ active }) => active);
    expect(result).to.deep.equal([{ 'user': 'barney', 'active': true }]);
  });

  it('should return an empty array when the input is an empty array', () => {
    const users = [];
    const result = filter(users, ({ active }) => active);
    expect(result).to.deep.equal([[]]);
  });
  it('should return an empty array when the input is null', () => {
    const users = null;
    const result = filter(users, ({ active }) => active);
    expect(result).to.deep.equal([[]]);
  });
});