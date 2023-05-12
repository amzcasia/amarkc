function Dog(name) {
    this.name = name;
  }
  let beagle = new Dog("Snoopy");
  Dog.prototype.numLegs = 4;
  console.log(beagle.numLegs);
  //this will display 4