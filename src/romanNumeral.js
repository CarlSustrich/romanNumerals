export default function romanNumeral(number) {
  let values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M :1000
  }



  if (number === 1) {
    return 'I';
  } else if (number === 5) {
    return 'V';
  } else if (number === 10) {
    return 'X';
  } else if (number === 50) {
    return 'L';
  } else if (number === 100) {
    return 'C';
  } else if (number === 500) {
    return 'D';
  } else if (number === 1000) {
    return 'M';
  }
}

function createNumeral(num) {
  let roman = '';
  while (num>0) {
    if (num>=1000) {
      roman += 'M';
      num -=1000;
    } else if (num>=500) {
      roman += 'D';
      num -= 500;
    } else if (num>= 100) {
      roman += 'C';
      num -= 100;
    } else if (num>=50) {
      roman += "L";
      num -= 50;
    } else if (num>=10) {
      roman += "X";
      num -= 10;
    } else if (num>=5) {
      roman += "V";
      num -= 5;
    } else if (num>=1) {
      roman += "I";
      num -= 1;
    }
  }
  return roman;
}
