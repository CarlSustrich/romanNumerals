import RomanNumeral from './../src/romanNumeral.js';

describe ('Roman Numeral', () => {

  test('it should return "I" when given a value of 1', () => {
    expect(RomanNumeral(1)).toEqual('I');
  })

  test('it should return "V" when given a value of 5', () => {
    expect(RomanNumeral(5)).toEqual('V');
  })

  test("it should return 'X' when given a value of 10", () => {
    expect(RomanNumeral(10)).toEqual('X');
  })

  test("it should return 'L' when given a value of 50", () => {
    expect(RomanNumeral(50)).toEqual('L');
  })

  test("it should return 'C' when given a value of 100", () => {
    expect(RomanNumeral(100)).toEqual('C');
  })

  test("it should return 'D' when given a value of 500", () => {
    expect(RomanNumeral(500)).toEqual('D');
  })

  test("it should return 'M' when given a value of 1000", () => {
    expect(RomanNumeral(1000)).toEqual('M');
  })

});
