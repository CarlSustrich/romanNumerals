import RomanNumeral from './../src/romanNumeral.js';

describe ('Roman Numeral', () => {

  test('it should return "I" when given a value of 1', () => {
    expect(RomanNumeral(1)).toEqual('I');
  })

  test('it should return "V" when given a value of 5', () => {
    expect(RomanNumeral(5)).toEqual('V');
  })
});
