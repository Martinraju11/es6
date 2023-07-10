var a = [1, 2, 34, 8];
var b = [...a];
//var b=Object.assign([],a);
//var b=JSON.parse(JSON.stringify(a));
a.pop();
b.push(56);
console.log(a, b);

var x = {
  name: "mar",
  id: 1,
};
var y = { ...x };
//var y=Object.assign({},x);
//var y=JSON.parse(JSON.stringify(x));
x.name = "raj";
y.id = 2;
console.log(x, y);
