// Einsatz von var
  var i;
  console.log(i);  // undefined
  if(x){
    var i = 5;
  }
  console.log(i); // 5
}
test(5);

// Einsatz von let
function test(x){
  var i;
  console.log(i); // undefined
  if(x){
    let i = 5;
  }
  console.log(i); // undefined
}
test(5);
