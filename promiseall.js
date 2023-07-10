function prom1() {
  return new Promise((m, n) => {
    m("first");
  });
}

function prom2() {
  return new Promise((x, y) => {
    x("second");
  });
}
function prom3() {
  return new Promise((k, l) => {
    k("third");
  });
}
Promise.all([prom1(), prom2(), prom3()]).then(console.log).catch(console.log);
