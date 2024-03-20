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
  const maxMin = [arr[0], arr[0]];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < maxMin[0]) {
      maxMin[0] = arr[i];
    } else if (arr[i] > maxMin[1]) {
      maxMin[1] = arr[i];
    }
  }
  return maxMin;
}
