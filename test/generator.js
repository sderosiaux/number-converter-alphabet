import { expect } from 'chai';
import { generator,  ALPHABET_BINARY, ALPHABET_ASCII, ALPHABET_DECIMAL } from '../index.js';

describe('the generator function', () => {
  it('should generate proper values', () => {
    let gen = generator(ALPHABET_ASCII);
    expect(gen()).to.be.equal('a');
    expect(gen()).to.be.equal('b');
    expect(gen()).to.be.equal('c');

    gen = generator(ALPHABET_BINARY);
    expect(gen()).to.be.equal('0');
    expect(gen()).to.be.equal('1');
    expect(gen()).to.be.equal('00');
    expect(gen()).to.be.equal('01');
    expect(gen()).to.be.equal('10');
    expect(gen()).to.be.equal('11');
  });

  it('should start at the given value', () => {
    const gen = generator(ALPHABET_DECIMAL, { start: 9 });
    expect(gen()).to.be.equal('9');
  });

  it('should not deal with implicitLeadingZero', () => {
    const gen = generator(ALPHABET_ASCII, { start: 25 });
    expect(gen()).to.be.equal('z');
    expect(gen()).to.be.equal('aa');
  });
});

