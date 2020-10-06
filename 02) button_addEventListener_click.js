// Beispielscode 
function Controller() {
  const button = document.getElementById('button');
  button.addEventListener('click', () => {
    this.log();
  });
}
function log() {
  console.log("test");
}
Controller();
