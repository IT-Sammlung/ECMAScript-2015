// Abbilden von Arrays auf Funktionsparameter mit Spread-Operator (...)
volume = (x,y,z) => {return x * y * z };
const numberArray = [3,5,9];
const result = volume(...numberArray);
console.log(result);
