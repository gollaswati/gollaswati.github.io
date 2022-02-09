function add() {
  var numOne, numTwo, sum;
  numOne = parseInt(document.getElementById("calc1").value);
  numTwo = parseInt(document.getElementById("calc2").value);
  sum = numOne + numTwo;
  document.getElementById("answer").value = sum;
}

function sub() {
  var numOne, numTwo, sum;
  numOne = parseInt(document.getElementById("calc1").value);
  numTwo = parseInt(document.getElementById("calc2").value);
  sum = numOne - numTwo;
  document.getElementById("answer").value = sum;
}

function mul() {
  var numOne, numTwo, sum;
  numOne = parseInt(document.getElementById("calc1").value);
  numTwo = parseInt(document.getElementById("calc2").value);
  sum = numOne * numTwo;
  document.getElementById("answer").value = sum;
}

function div() {
  var numOne, numTwo, sum;
  numOne = parseInt(document.getElementById("calc1").value);
  numTwo = parseInt(document.getElementById("calc2").value);
  sum = numOne / numTwo;
  document.getElementById("answer").value = sum;
}
// function select() {
//   var x = document.getElementsById("ads").value;
//   var y = document.getElementsById("ss").value;
//   if (y == "s") {
//     document.getElementsById("sss").onClick = "sub()";
//     document.getElementById("answer").value = sum;
//   }
// }
