function number2words(n){
  const singleDigits = {
    0: 'zero', 1: 'one', 2: 'two',
    3: 'three', 4: 'four', 5: 'five',
    6: 'six', 7: 'seven', 8: 'eight',
    9: 'nine'
  };
  const multiplesOfTen = {
    20: 'twenty', 30: 'thirty', 40: 'forty',
    50: 'fifty', 60: 'sixty', 70: 'seventy',
    80: 'eighty', 90: 'ninety'
  };
  let result;

  function calculateLessThan100(n) {
    if (n < 10) {
      return singleDigits[n];
    } else if (n === 10) {
      return 'ten';
    } else if (n === 11) {
      return 'eleven';
    } else if (n === 12) {
      return 'twelve';
    } else if (n === 13) {
      return 'thirteen';
    } else if (n === 15) {
      return 'fifteen';
    } else if (n > 12 && n < 100 && n < 20) {
      return `${singleDigits[n % 10]}teen`.split('tt').join('t');
    } else if (n > 19 && n < 100 && !(n % 10)) {
      return multiplesOfTen[n];
    } else if (n > 19 && n < 100 && n % 10) {
      return `${multiplesOfTen[n - (n % 10)]}-${singleDigits[n % 10]}`;
    }
  }

  function calculate100to999(n) {
    if (n > 99 && n < 1000 && !(n % 100)) {
      return `${singleDigits[n / 100]} hundred`;
    } else if (n > 99 && n < 1000) {
      return `${singleDigits[Math.floor(n / 100)]} hundred ${calculateLessThan100(n % 100)}`;
    }
  }

  if (n < 100) {
    result = calculateLessThan100(n);
  } else if (n >= 100 && n < 1000) {
    result = calculate100to999(n);
  } else if (n >= 1000 && !(n % 1000)) {
    const thousands = Number(n.toString().slice(0, n.toString().length - 3));
    result = `${
      calculate100to999(thousands) || calculateLessThan100(thousands)
    } thousand`;
  } else if (n >= 1000 && n < 1000000) {
    const thousands = Number(n.toString().slice(0, n.toString().length - 3));
    const ones = Number(n.toString().slice(n.toString().length - 3, n.toString().length));
    result = `${
      calculate100to999(thousands) || calculateLessThan100(thousands)
    } thousand ${
      calculate100to999(ones) || calculateLessThan100(ones)
    }`;
  }
  return result;
}
