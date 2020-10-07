// Alte Schreibweise
var katze = {
  setName(name) {
    this.name = name;
  },
  getName() {
    console.log(this.name);
  }
};
katze.setName("tigerli");
katze.getName();


// ES2015
var katze = {
  set setName(name) {
    this.name = name;
  },
  get getName() {
    return this.name;
  }
}
katze.setName = 'Tigerli';
console.log(katze.getName);
