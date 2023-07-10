function palin(a) {
  var rev = 0,
    rem,
    n = a;
  while (a > 0) {
    rem = a % 10;
    rev = rev * 10 + rem;
    a = parseInt(a / 10);
  }
  return new Promise((resolve, reject) => {
    if (rev === n) {
      resolve(n);
    } else {
      reject(n);
    }
  });
}

palin(343)
  .then((b) => {
    console.log(`${b} is a palindrome number`);
  })
  .catch((b) => {
    console.log(`${b} is not a palindrome number`);
  });
