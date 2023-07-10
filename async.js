function prom1() {
  return new Promise((m, n) => {
    setTimeout(() => {
      m("first");
    }, 2000);
  });
}
function prom2() {
  return new Promise((x, y) => {
    setTimeout(() => {
      x("second");
    }, 3000);
  });
}

async function mise() {
  try {
    var a = await prom1();
    var b = await prom2();
    console.log(a, b);
  } catch {
    console.log("fail");
  }
}
mise();
