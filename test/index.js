import { expect } from 'chai';
import convert, { ALPHABET_HEXADECIMAL, ALPHABET_BINARY, ALPHABET_ASCII, ALPHABET_DECIMAL } from '../index.js';

describe('the converter', () => {
  it('should properly work with hexadecimal alphabet', () => {
    expect(convert(65535, ALPHABET_HEXADECIMAL)).to.be.equal('FFFF');
    expect(convert(3735928559, ALPHABET_HEXADECIMAL)).to.be.equal('DEADBEEF');
  });

  it('should properly work with binary alphabet', () => {
    expect(convert(15, ALPHABET_BINARY)).to.be.equal('1111');
    expect(convert(16, ALPHABET_BINARY)).to.be.equal('10000');
  });

  it('should properly work with ascii alphabet', () => {
    expect(convert(25, ALPHABET_ASCII)).to.be.equal('z');
    expect(convert(26, ALPHABET_ASCII)).to.be.equal('ba');
  });

  it('should properly work with decimal alphabet', () => {
    expect(convert(0, ALPHABET_DECIMAL)).to.be.equal('0');
    expect(convert(65535, ALPHABET_DECIMAL)).to.be.equal('65535');
  });

  it('should properly work with a custom alphabet', () => {
    expect(convert(0, '9876543210')).to.be.equal('9');
    expect(convert(65535, '9876543210')).to.be.equal('34464');
  });

  it('should properly work with multiple characters alphabets', () => {
    expect(convert(35427, ['ping|', 'pong|', 'tok|'])).to.be.equal(
      'pong|tok|pong|ping|pong|tok|pong|ping|pong|ping|'
    );
    expect(convert(5, ['hey', 'ho'])).to.be.equal(
      'hoheyho'
    );
  });

  it('should properly keep the minus sign', () => {
    expect(convert(-35427, '012345')).to.satisfy(s => s.startsWith('-'));
    expect(convert(-1, '01')).to.satisfy(s => s.startsWith('-'));
  });

  it('should properly handle the implicitLeadingZero option', () => {
    expect(convert(26, ALPHABET_ASCII, { implicitLeadingZero: true })).to.be.equal('ba');
    expect(convert(26, ALPHABET_ASCII, { implicitLeadingZero: false })).to.be.equal('aa');

    expect(convert(26, ALPHABET_DECIMAL, { implicitLeadingZero: true })).to.be.equal('26');

    expect(convert(6, ALPHABET_DECIMAL, { implicitLeadingZero: false })).to.be.equal('6');
    expect(convert(16, ALPHABET_DECIMAL, { implicitLeadingZero: false })).to.be.equal('06');
    expect(convert(26, ALPHABET_DECIMAL, { implicitLeadingZero: false })).to.be.equal('16');
  });

  it('should fail if there is less than 2 characters in the alphabet', () => {
    expect(() => convert(35427, '')).to.throw(Error);
    expect(() => convert(1, '1')).to.throw(Error);
    expect(() => convert(1, '12')).to.not.throw(Error);
  });
});
