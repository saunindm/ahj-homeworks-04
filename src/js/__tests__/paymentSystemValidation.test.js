import paymentSystem from '../systemPayment';

jest.setTimeout(15000);

test.each([
  ['visa', '4929388527611262', 'visa'],
  ['masterCard', '5512677915000009', 'masterCard'],
  ['americanExpress', '341119173649118', 'americanExpress'],
  ['discover', '6011202619207687', 'discover'],
  ['jcb', '3536776776545358944', 'jcb'],
  ['dinersClub', '30257330207887', 'dinersClub'],
  ['mir', '2221004019831198', 'mir'],
  ['false', '1198290245462222', false],
])(('function should return %s'), (_, value, expected) => {
  const result = paymentSystem(value);
  expect(result).toBe(expected);
});
