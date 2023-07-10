localStorage.setItem(
  "person",
  JSON.stringify({
    name: "MAr",
    id: 1,
  })
);
localStorage.setItem("Name", "raj");
var a = JSON.parse(localStorage.getItem("Name"));
console.log(a);

localStorage.removeItem("person");
localStorage.clear();
