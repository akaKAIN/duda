import {literalCounter, popularLetter, textFormatLeft} from '../tasks/1.js'

describe('task 1', () => {
  it.each`
  text | maxLen | expected
  ${'a'} | ${2} | ${' a'}
  ${'a'} | ${1} | ${'a'}
  ${'abb'} | ${4} | ${' abb'}
  ${'PingPong'} | ${4} | ${'Pong'}
  ${'PingPong'} | ${0} | ${''}
  `('textFormatLeft: should return correct result', async ({text, maxLen, expected}) => {
    const result = textFormatLeft(text, maxLen);
    expect(result).toEqual(expected);
  });

  it.each`
  text | letter | expected
  ${'aaaa'} | ${'a'} | ${4}
  ${'abab'} | ${'a'} | ${2}
  ${'aaaa'} | ${''} | ${0}
  ${''} | ${'a'} | ${0}
  ${'sdf'} | ${''} | ${0}
  ${''} | ${''} | ${0}
  ${'УУ уу уу'} | ${' '} | ${2}
  `('literalCounter: should return correct result', async ({text, letter, expected}) => {
    const result = literalCounter(text, letter);
    expect(result).toEqual(expected);
  });

  it.each`
  text | expected
  ${'aab'} | ${'a'}
  ${'abbba'} | ${'b'}
  ${'a  b  a'} | ${' '}
  ${'aabb'} | ${'a'}
  ${''} | ${''}
  ${'cCbbaAa'} | ${'a'}
  ${'Duda, da? DA!'} | ${'d'}
  `('popularLetter: should return correct result', async ({text, expected}) => {

    const result = popularLetter(text);
    expect(result).toEqual(expected);
  });
})
