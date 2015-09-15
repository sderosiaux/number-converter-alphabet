export const ALPHABET_BINARY = '01';
export const ALPHABET_DECIMAL = '0123456789';
export const ALPHABET_HEXADECIMAL = '0123456789ABCDEF';
export const ALPHABET_ASCII = 'abcdefghijklmnopqrstuvwxyz';

export default function convert(value, alphabet, { implicitLeadingZero = true } = {}) {
  if (alphabet.length < 2) {
    throw new Error('alphabet should be composed by at least 2 elements');
  }

  const sign = (Math.sign(value) < 0 ? '-' : '');
  const abs = Math.abs(value);

  if (abs < alphabet.length) {
    return sign + alphabet[abs];
  }

  let dividend = ~~(abs / alphabet.length);
  const rest = abs - dividend * alphabet.length;

  // "A", "B", "AA" and not "A", "B", "BA"
  // there is no implicit "A" in front as the numeric world ("10" = "..0000010")
  if (!implicitLeadingZero) {
    dividend -= 1;
  }

  return sign + convert(dividend, alphabet) + alphabet[rest];
}

export function generator(alphabet, { start = 0 } = {}) {
  let i = start;
  return () => convert(i++, alphabet, { implicitLeadingZero: false });
}
