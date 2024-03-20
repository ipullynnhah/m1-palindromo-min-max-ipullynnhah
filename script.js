function isPalindrome(str) {
  const SPACE = " ";
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] === SPACE) {
      i++;
    }
    if (str[j] === SPACE) {
      j--;
    }

    if (str[i].toLowerCase() !== str[j].toLowerCase()) {
      return false;
    }
  }
  return true;
}

function arrayMaxMin(arr) {
  /* Seu código aqui */
}
