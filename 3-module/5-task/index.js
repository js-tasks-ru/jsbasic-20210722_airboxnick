function getMinMax(str) {
  let arr = str.split(' '),
      arrNumbs = [],
      obj = {};

  for ( let item of arr ) {
      if ( isFinite( item ) ) {
        arrNumbs.push(+item);
      }
  }

  obj = {
    'min': Math.min(...arrNumbs),
    'max': Math.max(...arrNumbs),
  }

  return obj;
}