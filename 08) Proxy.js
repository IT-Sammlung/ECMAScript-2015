const validator = {
  set(objekt, property, value) {
    if(property === 'age') {
      if(!Number.isInteger(value)) {
        throw new TypeError('Alter ist keine Zahl');
      }
    }
    objekt[property] = value;
  }
};

const person = new Proxy({}, validator);
person.age = 25;
console.log(person.age); // 25
person.age = 'Fünfundzwanzig'; // Alter ist keine Zahl
