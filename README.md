# number-converter-alphabet
> Convert a number to a representation in any base or in any custom alphabet.

## Why

When you need to convert a number to a custom base/alphabet, this comes in handy.
For instance, for Excel style column names, you can count from 0 to n and
get the representation of the number as a column name "AB", "CF" easily.

## Install

```shell
$ npm install --save number-converter-alphabet
```

## Usage

```js
import convert, { ALPHABET_HEXADECIMAL } from 'number-converter-alphabet';

console.log(convert(65535, ALPHABET_HEXADECIMAL));
// Output: FFFF
console.log(convert(35427, ['ping|', 'pong|', 'tok|']));
// Output: pong|tok|pong|ping|pong|tok|pong|ping|pong|ping|
```

