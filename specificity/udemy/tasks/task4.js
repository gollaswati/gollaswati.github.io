var text = null;
var b = null;
window.addEventListener("DOMContentLoaded", function () {
  text = document.getElementById("text");
  // c1 = document.getElementById("child1");
  // c2 = document.getElementById("child2");
  // c3 = document.getElementById("child3");
  // c4 = document.getElementById("child4");
  b = document.getElementById("btn");

  b.addEventListener("click", function () {
    // You need to add your logic for determining which
    // child element needs to be removed here. I'm just
    // showing the actual code to remove the element.
    text.addChild();
  });
});
