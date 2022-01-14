import {literalCounter, popularLetter, textFormatLeft} from '../tasks/1.js'

describe('task 1', () => {
  it('textFormatLeft: should return correct result', () => {
    const testCases = [
      {text: 'a', maxLen: 2, expected: ' a'},
      {text: 'a', maxLen: 1, expected: 'a'},
      {text: 'abb', maxLen: 4, expected: ' abb'},
      {text: 'PingPong', maxLen: 4, expected: 'Pong'},
      {text: 'PingPong', maxLen: 0, expected: ''},
    ];
    testCases.forEach(testCase => {
      const result = textFormatLeft(testCase.text, testCase.maxLen);
      expect(result).toEqual(testCase.expected);
    });
  });

  it('literalCounter: should return correct result', () => {
    const testCases = [
      {text: 'aaaa', letter: 'a', expected: 4},
      {text: 'abab', letter: 'a', expected: 2},
      {text: 'aaaaa', letter: '', expected: 0},
      {text: '', letter: 'a', expected: 0},
      {text: 'ыва', letter: '', expected: 0},
      {text: '', letter: '', expected: 0},
      {text: 'УУ уу уу', letter: ' ', expected: 2},
    ];

    testCases.forEach(testCase => {
      const result = literalCounter(testCase.text, testCase.letter);
      expect(result).toEqual(testCase.expected);
    });
  });

  it('popularLetter: should return correct result', () => {
    const testCases = [
      {text: 'aab', expected: 'a'},
      {text: 'abbba', expected: 'b'},
      {text: 'a  b  a', expected: ' '},
      {text: 'aabb', expected: 'a'},
      {text: '', expected: ''},
      {text: 'cCbbaAa', expected: 'a'},
      {text: 'Duda, da? DA!', expected: 'd'},
    ];
    testCases.forEach(testCase => {
      const result = popularLetter(testCase.text);
      expect(result).toEqual(testCase.expected);
    });
  });
})
