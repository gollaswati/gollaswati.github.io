function countWords() {
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
}
function charcount() {
  var charlenght = document.getElementById("inputField").value.length;
  var char = document.getElementById("inputField").value;
  var count = 0;
  for (var i = 0; i < charlenght; i++) {
    if (char[i] != " ") {
      count++;
    }
    // count++;
  }
  document.getElementById("show1").innerText = count;
}

function spacecount() {
  var charlenght = document.getElementById("inputField").value.length;
  var char = document.getElementById("inputField").value;
  var count = 0;
  for (var i = 0; i < charlenght; i++) {
    if (char[i] == " ") {
      count++;
    }
    // count++;
  }
  document.getElementById("show2").innerText = count;
}
