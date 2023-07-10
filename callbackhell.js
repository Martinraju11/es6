function printA() {
  setTimeout(() => {
    console.log("A");
    printB();
  }, 2000);
}
function printB() {
  setTimeout(() => {
    console.log("B");
    printC();
  }, 1000);
}
function printC() {
  console.log("C");
}
printA();
