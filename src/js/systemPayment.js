export default function paymentSystem(value) {
  if (value.startsWith('4')) {
    return 'visa';
  }

  if (value.startsWith('51') || value.startsWith('52') || value.startsWith('53') || value.startsWith('54') || value.startsWith('55')) {
    return 'masterCard';
  }

  if (value.startsWith('37') || value.startsWith('34')) {
    return 'americanExpress';
  }

  if (value.startsWith('60')) {
    return 'discover';
  }

  if (value.startsWith('31') || value.startsWith('35')) {
    return 'jcb';
  }

  if (value.startsWith('30') || value.startsWith('36') || value.startsWith('38')) {
    return 'dinersClub';
  }

  if (value.startsWith('2')) {
    return 'mir';
  }

  return false;
}
