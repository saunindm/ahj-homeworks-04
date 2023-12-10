export default function validateCard(value) {
  let valid = false;
  const originalArr = value.split('');
  const checkDigit = originalArr.pop();

  const reverseArr = originalArr.reverse();

  const oddArr = [];
  const evenArr = [];
  let item;
  for (let i = 0; i < reverseArr.length; i += 1) {
    if (i % 2 === 0) {
      item = reverseArr[i];
      evenArr.push(item);
    } else {
      item = reverseArr[i];
      oddArr.push(item);
    }
  }

  const doubleEvensArr = evenArr.map((el) => el * 2);

  const newEvensArr = [];

  for (let j = 0; j < doubleEvensArr.length; j += 1) {
    if (doubleEvensArr[j] < 9) {
      newEvensArr.push(doubleEvensArr[j]);
    } else {
      const str = String(doubleEvensArr[j]);
      const num = str.split('');
      const a = num[0];
      const b = num[1];
      const c = +a + +b;
      newEvensArr.push(c);
    }
  }

  const oddSum = oddArr.reduce((sum, elem) => sum + +elem, 0);
  const evenSum = newEvensArr.reduce((sum, elem) => sum + elem, 0);
  const digitSum = oddSum + evenSum;

  const modResult = 10 - (digitSum % 10);

  if (modResult === +checkDigit) {
    valid = true;
  }

  return valid;
}
