import validateCard from '../validateCard';

jest.setTimeout(15000);

test('function shoud return valid if the card number is valid', () => {
  const value = '4929388527611262';
  const result = validateCard(value);
  expect(result).toBe(true);
});

test('function shoud should return invalid if the card number is invalid', () => {
  const value = '112677915000000';
  const result = validateCard(value);
  expect(result).toBe(false);
});
