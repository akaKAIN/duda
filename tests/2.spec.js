import {createMaxNum} from "../tasks/2";

describe('task 1', () => {
  it('textFormatLeft: should return correct result', () => {
    const testCases = [
      {number: 112, expected: 211},
      {number: 210, expected: 210},
      {number: 11549, expected: 95411},
      {number: 1029, expected: 9210},
    ];
    testCases.forEach(testCase => {
      const result = createMaxNum(testCase.number);
      expect(result).toEqual(testCase.expected);
    });
  });
})
