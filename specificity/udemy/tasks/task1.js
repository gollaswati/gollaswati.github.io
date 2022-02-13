function result() {
  var x = Number(document.getElementById("calc1").value);
  var y = Number(document.getElementById("calc2").value);
  var z = 0;

  // addition, Subtraction, Multiplication, Division

  if (document.getElementById("add").checked) {
    z = x + y;
  } else if (document.getElementById("sub").checked) {
    z = x - y;
  } else if (document.getElementById("mul").checked) {
    z = x * y;
  } else {
    z = x / y;
  }

  document.getElementById("answer").innerText = "output is: " + z;
}
