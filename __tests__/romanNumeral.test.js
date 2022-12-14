import RomanNumeral from './../src/romanNumeral.js';

describe ('Roman Numeral', () => {

  test('it should return "I" when given a value of 1', () => {
    expect(RomanNumeral(1)).toEqual('I');
  })

  test('it should return "V" when given a value of 5', () => {
    expect(RomanNumeral(5)).toEqual('V');
  })

  test("it should return 'x' when given a value of 10", () => {
    expect(RomanNumeral(10)).toEqual('x');
  })
});
