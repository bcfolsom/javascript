var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function isEven (n) {
  return n % 2 == 0;
}
a.filter(isEven);