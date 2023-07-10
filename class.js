class Batch {
  constructor(name, id, batch) {
    this.name = name;
    this.id = id;
    this.batch = batch;
  }
  getDetails() {
    return `Name-${this.name},id-${this.id},batch-${this.batch}`;
  }
}
var person1 = new Batch("Raj", 1, "FED10");
var person2 = new Batch("murugan", 2, "FED10");
console.log(person1.getDetails());

class Data extends Batch {
  constructor(name, id, batch, place) {
    super(name, id, batch);
    this.place = place;
  }
  getDetails() {
    return `Name-${this.name},id-${this.id},batch-${this.batch},place-${this.place}`;
  }
}
var p1 = new Data("mar", 5, "FED10", "tenkasi");
var p2 = new Data("murugan", 2, "FED10", "Kadapokathi");
console.log(p1, p2);
console.log(p1.getDetails());
