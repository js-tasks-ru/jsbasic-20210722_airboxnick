function camelize(str) {
  let newStr = '',
      isDash = false;
  for ( item in [...str] ) {
    if ( [...str][+item] === '-' ) {
      newStr += '';
      isDash = true;
    }

    if (  [...str][+item] != '-' ) {
      if ( isDash ) {
        newStr += [...str][+item].toUpperCase();
        isDash = false;
      } else {
        newStr += [...str][+item];
      }
    }
  }

  return newStr;
}