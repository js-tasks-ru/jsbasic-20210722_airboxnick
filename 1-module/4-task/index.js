function checkSpam(str) {
  str = str.toLowerCase();

  if ( str.includes('viagra') || str.includes('xxx') || str.includes('1xbet') ) {
    return true;
  }

  return false;
}