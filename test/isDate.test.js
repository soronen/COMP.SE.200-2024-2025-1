import { expect } from 'chai';
import isDate from '../src/isDate.js';

describe('isDate', function () {
    it('Recognize the new date as a date object', () => {
        expect(isDate(new Date)).to.equal(true)
      })
      it('Recognize the first date as a date object', () => {
        expect(isDate(new Date(0))).to.equal(true)
      })
      it('Recognize the day before first date as a date object', () => {
        expect(isDate(new Date(0 - 1))).to.equal(true)
      })
      it('Recognize the last date as a date object', () => {
        expect(isDate(new Date(8.64e15))).to.equal(true)
      })
      it('Recognize the one day over last date as a date object', () => {
        expect(isDate(new Date(8.64e15 + 1))).to.equal(true)
      })
      it('does not recognize text of date as a date object', () => {
        expect(isDate('Mon April 23 2012')).to.equal(false)
      })
      it('Recognize invalid date as a date object', () => {
        const invalidDate = new Date('invalid date')
        expect(isDate(invalidDate)).to.equal(true)
        expect(isNaN(invalidDate.getTime())).to.equal(true)
      })
      it('does not recognize number as a date object', () => {
        expect(isDate(23.2012)).to.equal(false)
      })
      it('Does not recognize array as a date object', () => {
        expect(isDate([])).to.equal(false)
      })
      it('Does not recognize function as a date object', () => {
        expect(isDate(() => {})).to.equal(false)
      })
      it('Does not recognize null as a date object', () => {
        expect(isDate(null)).to.equal(false)
      })
      it('Does not recognize undefined as a date object', () => {
        expect(isDate(undefined)).to.equal(false)
      })
});
