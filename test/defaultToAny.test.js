import { expect } from 'chai';
import defaultToAny from '../src/defaultToAny.js'

describe('defaultToAny', () => {
    it('Should return first value that is 1', () => {
        expect(defaultToAny(1, 10, 20)).to.equal(1)
    })
    it('Should return second value if first is undefined that is 10', () => {
        expect(defaultToAny(undefined, 10, 20)).to.equal(10)
    })
    it('Should return third value if first two is undefined that is 20', () => {
        expect(defaultToAny(undefined, undefined, 20)).to.equal(20)
    })
    it('Should return invalide value if all values are undefined', () => {
        expect(defaultToAny(undefined, undefined, undefined)).to.NaN
    })
    it('Should return second value if first is null that is 10', () => {
        expect(defaultToAny(null, 10, 20)).to.equal(10)
    })
    it('Should return second value if first is NaN that is 10', () => {
        expect(defaultToAny(NaN, 10, 20)).to.equal(10)
    })
    it('Should return first value that is 1 even if any value later is NaN', () => {
        expect(defaultToAny(1, NaN, NaN)).to.equal(1)
    })
    it('Should return string value correctly', () => {
        expect(defaultToAny('value1', 'value2', 'value3')).to.equal('value1')
    })
    it('Should return boolean value correctly', () => {
        expect(defaultToAny(true, false, true)).to.equal(true)
    })
});