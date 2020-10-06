///////////////////// Alt
class Katze {
  constructor(name, alter) {
    this.name = name || 'Default-Katze';
    this.alter = alter || 'Nicht angegebenes Alter';
  }
}
const tigerli = new Katze('tigerli', 3);
const neuGeboren = new Katze();
console.log(tigerli); // Katze {name: tigerli, alter: 3}
console.log(neuGeboren); // Katze {name: Default-Katze, alter: Nicht angegebenes Alter}



class Katze {
  constructor(name = 'Default-Katze', alter = 'Nicht angegebenes Alter') {
    this.name = name;
    this.alter = alter;
  }
}
const tigerli = new Katze('tigerli', 3);
const neuGeboren = new Katze();
console.log(tigerli); // Katze {name: tigerli, alter: 3}
console.log(neuGeboren); // Katze {name: Default-Katze, alter: Nicht angegebenes Alter}
