import { expect } from 'chai';
import upperFirst from '../src/upperFirst.js'

describe('upperFirst', () => {
  it('Works on a single word', () => {
    expect(upperFirst('word')).to.equal('Word')
  })
  it('Works on two words', () => {
    expect(upperFirst('word word')).to.equal('Word word')
  })
  it('Works on an uppercase Word', () => {
    expect(upperFirst('Word')).to.equal('Word')
  })
  it('Works a non ascii character', () => {
    expect(upperFirst('ålesund')).to.equal('Ålesund')
  })
  it('Does nothing for chinese characters', () => {
    expect(upperFirst('裁判')).to.equal('裁判')
  })
  it('Does nothing for numbers', () => {
    expect(upperFirst('42')).to.equal('42')
  })
});
