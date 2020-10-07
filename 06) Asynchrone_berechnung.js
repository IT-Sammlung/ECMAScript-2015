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
