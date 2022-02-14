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
