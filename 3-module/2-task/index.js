function filterRange(arr, a, b) {
  let newArr = [];

  let max = 0,
      min = 0;
  if ( Math.max(a, b) == a ) {
    max = a;
    min = b;
  } else {
    max = b;
    min = a;
  }

  for ( let i = min; i <= max; i++ ) {
    if ( arr.indexOf(i) !== -1 ) {
      newArr.push(arr[i]);
    }
  }

return newArr;
}
