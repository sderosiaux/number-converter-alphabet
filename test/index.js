import convert, { ALPHABET_HEXADECIMAL, ALPHABET_BINARY, ALPHABET_ASCII, ALPHABET_DECIMAL } from '../index.js';

console.log(convert(65535, ALPHABET_HEXADECIMAL));
// Output: FFFF
console.log(convert(-35427, ['ping|', 'pong|', 'tok|']));
// Output: pong|tok|pong|ping|pong|tok|pong|ping|pong|ping|
console.log(convert(3735928559, ALPHABET_HEXADECIMAL));
// Output: DEADBEEF


console.log(convert(26, ALPHABET_ASCII, { implicitLeadingZero: true }));
console.log(convert(26, ALPHABET_ASCII, { implicitLeadingZero: false }));

console.log(convert(6, ALPHABET_DECIMAL, { implicitLeadingZero: false }));
console.log(convert(16, ALPHABET_DECIMAL, { implicitLeadingZero: false }));
console.log(convert(26, ALPHABET_DECIMAL, { implicitLeadingZero: false }));
