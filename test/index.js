import { expect } from 'chai';
import convert, { ALPHABET_HEXADECIMAL, ALPHABET_BINARY, ALPHABET_ASCII, ALPHABET_DECIMAL } from '../index.js';

describe('number-converter-alphabet', () => {
  it('should properly work with hexadecimal alphabet', () => {
    expect(convert(65535, ALPHABET_HEXADECIMAL)).to.be.equal('FFFF');
    expect(convert(3735928559, ALPHABET_HEXADECIMAL)).to.be.equal('DEADBEEF');
  });

  it('should properly work with binary alphabet', () => {
    expect(convert(65535, ALPHABET_HEXADECIMAL)).to.be.equal('FFFF');
  });

  it('should properly work with ascii alphabet', () => {
    expect(convert(65535, ALPHABET_HEXADECIMAL)).to.be.equal('FFFF');
  });

  it('should properly work with decimal alphabet', () => {
    expect(convert(65535, ALPHABET_HEXADECIMAL)).to.be.equal('FFFF');
  });

  it('should properly work with multiple characters alphabets', () => {
    expect(convert(35427, ['ping|', 'pong|', 'tok|'])).to.be.equal(
      'pong|tok|pong|ping|pong|tok|pong|ping|pong|ping|'
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


