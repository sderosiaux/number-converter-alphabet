# number-converter-alphabet [![Build Status](https://travis-ci.org/chtefi/number-converter-alphabet.svg)](https://travis-ci.org/chtefi/number-converter-alphabet)
> Convert a number to any base/any custom alphabet.

## Why

When you need to convert a number to a custom base/alphabet, this comes in handy.
For instance, for Excel style column names, you can count from `0` to `n` and
get the representation of the number as a column name: "AZ" "BA" easily.

## Install

```shell
$ npm install --save number-converter-alphabet
```

## Usage

```js
import convert, { ALPHABET_HEXADECIMAL, ALPHABET_BINARY } from 'number-converter-alphabet';

console.log(convert(3735928559, ALPHABET_HEXADECIMAL));
// Output: DEADBEEF
console.log(convert(3735928559, ALPHABET_BINARY))
// Output: 11011110101011011011111011101111
console.log(convert(3735928559, '0123'))
// Output: 3132223123323233

console.log(convert(35427, ['ping|', 'pong|', 'tok|']));
// Output: pong|tok|pong|ping|pong|tok|pong|ping|pong|ping|
```

## Implicit leading zero

In our number world, `...00001 === 1`, we don't think of the leading zeros.
Same for hexadecimal : `...000FF === FF`.

But sometimes, you want those to be different.
For instance, in Excel, the column name are using the normal alphabet, and after
 "Z", there is "AA", not "BA".

You can pass an option to control this behavior: `implicitLeadingZero` (default: 
`true`).

```js
import convert, { ALPHABET_ASCII, ALPHABET_DECIMAL } from 'number-converter-alphabet';

console.log(convert(26, ALPHABET_ASCII, { implicitLeadingZero: true }));
// Output: ba
console.log(convert(26, ALPHABET_ASCII, { implicitLeadingZero: false }));
// Output: aa

console.log(convert(26, ALPHABET_DECIMAL, { implicitLeadingZero: true }));
// Output: 26
console.log(convert(6, ALPHABET_DECIMAL, { implicitLeadingZero: false }));
// Output: 6
console.log(convert(16, ALPHABET_DECIMAL, { implicitLeadingZero: false }));
// Output: 06
console.log(convert(26, ALPHABET_DECIMAL, { implicitLeadingZero: false }));
// Output: 16
```

