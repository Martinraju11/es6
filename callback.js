function palin(b) {
  let rev = 0,
    rem;
  while (b > 0) {
    rem = b % 10;
    rev = rev * 10 + rem;
    b = parseInt(b / 10);
  }
  return rev;
}
function check(a) {
  let x = palin(a);
  if (x === a) {
    console.log("palindrome");
  } else {
    console.log("Not a palindrome");
  }
}
check(675);
