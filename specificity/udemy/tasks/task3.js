function word() {
  var text = document.getElementById("inputField").value;
  var numWords = 0;
  for (var i = 0; i < text.length; i++) {
    var currentCharacter = text[i];
    if (currentCharacter == " ") {
      numWords += 1;
    }
  }
  numWords += 1;
  document.getElementById("show").innerHTML = numWords;
  var charlenght = document.getElementById("inputField").value.length;
  var char = document.getElementById("inputField").value;
  var count = 0;
  for (var i = 0; i < charlenght; i++) {
    if (char[i] != " ") {
      count++;
    }
  }
  document.getElementById("show1").innerText = count;
  var charlenght = document.getElementById("inputField").value.length;
  var char = document.getElementById("inputField").value;
  var count = 0;
  for (var i = 0; i < charlenght; i++) {
    if (char[i] == " ") {
      count++;
    }
  }
  document.getElementById("show2").innerText = count;
}
