let num = parseInt(prompt("Enter a number"));
let n = new Promise((resolve, reject) => {
  if (num % 2 === 0) {
    resolve(num);
  } else {
    reject(num);
  }
});
n.then((a) => {
  console.log(`${a} is even`);
}).catch((a) => {
  console.log(`${a} is odd`);
});
