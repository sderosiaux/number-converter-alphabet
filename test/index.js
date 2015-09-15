import convert, { ALPHABET_HEXADECIMAL } from '../index.js';

console.log(convert(65535, ALPHABET_HEXADECIMAL));
// Output: FFFF
console.log(convert(-35427, ['ping|', 'pong|', 'tok|']));
// Output: pong|tok|pong|ping|pong|tok|pong|ping|pong|ping|
