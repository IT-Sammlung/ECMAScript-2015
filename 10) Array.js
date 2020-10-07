// mit Array.from ein neues Array auf Basis eines array-ähnlichen Objekts erstellen
function wandle() {
  return Array.from(arguments, (number => {
    return number;
  }))
}
const wandleJetzt = wandle(1,2,3,4,5);
console.log(wandleJetzt); // [1,2,3,4,5]
