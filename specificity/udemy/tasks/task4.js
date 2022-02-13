// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function () {
//     var div = this.parentElement;
//     div.style.display = "none";
//   };
// }

// // Create a new list item when clicking on the "Add" button
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === "") {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//       var div = this.parentElement;
//       div.style.display = "none";
//     };
//   }
// }
// let btn = document.createElement("button");
// btn.innerText = "remove";
// btn.onclick = function () {
//   let close = document.getElementById("remove");
//   var clo = this.parentElement;
//   clo.style.display = "none";

function add() {
  let myinput = document.getElementById("input").value;
  var li = document.createElement("li");
  // li.append(myinput);
  li.id = "remove";
  let all = document.querySelectorAll("li");
  let btn = document.createElement("button");
  btn.innerText = "remove";
  btn.onclick = function () {
    var clo = this.parentElement;
    clo.style.display = "none";
  };
  li.append(myinput, btn);
  document.querySelector("ul").append(li);
}
