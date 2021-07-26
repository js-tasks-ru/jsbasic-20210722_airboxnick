function isPositiveNumber ( num ) {
  if ( num >= 0 ) {
    return true;
  }

  return false;
}

function isPrime ( num ) {
  if ( num === ~~num ) {
    return true;
  }

  return false;
}

function factorial ( n ) {
   if ( !( isPositiveNumber (n) && isPrime (n) ) ) {
    return 'error';
  } else if ( n === 0 ) {
    return 1;
  }

  let result = n;

  for ( let i = 1; i < n; i++ ) {
    result *= n - i
  }

  return result;
}
