import RomanNumeral from './../src/romanNumeral.js';

describe ('Roman Numeral', () => {
  test('it should return "I" when given a value of 1', () => {
    expect(RomanNumeral(1)).toEqual('I');
  })
});
