function prom1() {
  return new Promise((m, n) => {
    m("first");
  });
}

function prom2() {
  return new Promise((x, y) => {
    y("second");
  });
}
function prom3() {
  return new Promise((k, l) => {
    k("third");
  });
}
prom1()
  .then((a) => {
    console.log(a);
    return prom2();
  })
  .then((b) => {
    console.log(b);
    return prom3();
  })
  .then((c) => {
    console.log(c);
  })
  .catch((s) => {
    console.log(s);
  });
