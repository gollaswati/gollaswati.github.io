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
