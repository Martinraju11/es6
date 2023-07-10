var a = [7, 8, 36, 8, 282];
var b = a.some((e) => {
  return e % 2 === 0;
});
console.log(b);
