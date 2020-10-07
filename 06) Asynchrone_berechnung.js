// Asynchrone Berechnung
function asynchron() {
  const promise = new Promise(
    (resolve, reject) => {
      setTimeout(
        () => {
          let result = 500; // <-- Asynchrone Berechnung
          resolve(result);
        }, 2000
      );
    }
  );
  return promise;
}
// Asynchroner Aufruf
asynchron().then(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error);
  }
);

// Asynchroner Aufruf mit Verkettung
asynchron()
.then((result) => result * 2)
.then((result) => result * 3)
.then((result) => console.log(result));



// Asynchroner Aufruf mit Verkettung und abfang von Fehler
asynchron()
.then((result) => result * 2)
.then((result) => result * 3)
.then((result) => console.log(result))
.catch((error) => {console.error(error)}
);
