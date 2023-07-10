var person1 = {
  name: "Mar",
};
var person2 = {
  find: function (a, b) {
    console.log(this.name);
    console.log(a + b);
  },
};
//person2.find.call(person1, 4, 7);
//person2.find.apply(person1, [2, 3]);
let n = person2.find.bind(person1);
console.log(n(8, 8));
