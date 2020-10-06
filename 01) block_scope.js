// Block Scope
function test(x){
  var i;
  console.log(i); 
  if(x){
    var i = 5;
  }
  console.log(i);
}
test(5);

