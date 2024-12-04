import { expect } from 'chai';
import countBy from '../src/countBy.js'

describe('countBy', () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'betty', 'active': true },
        { 'user': 'fred', 'active': false }
    ]
    it('Should count correct amount true and false results', () => {
        expect(countBy(users, value => value.active)).to.deep.equal({ true: 2, false: 1 })
    })
    it('Should count undefined amount based on amount of users', () => {
        expect(countBy(users, value => value.undefined)).to.deep.equal({ undefined : 3 })
    })
    it('Should return empty array from null object', () => {
        expect(countBy(null, value => value.active)).to.deep.equal({})
    })
    it('Should return empty array from undefined object', () => {
        expect(countBy(undefined, value => value.active)).to.deep.equal({})
    })
    it('Should return empty array from empty array', () => {
        expect(countBy({}, value => value.active)).to.deep.equal({})
    })
    
});