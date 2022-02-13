function hight() {
  let a = document.getElementById("N").value;
  a = a.split(",");
  let small = a[0];
  let largest = a[0];
  let even = "";
  let odd = "";
  let positive = "";
  let negative = "";
  for (let i = 0; i < a.length; i++) {
    if (small > a[i]) {
      small = a[i];
    }
    if (largest < a[i]) {
      largest = a[i];
    }
    if (a[i] % 2 == 0) {
      even = even + a[i] + ",";
    }
    if (a[i] % 2 == 1) {
      odd = odd + a[i] + ",";
    }
    if (a[i] > 0) {
      positive = positive + a[i] + ",";
    }
    if (a[i] < 0) {
      negative = negative + a[i] + ",";
    }
  }
  document.getElementById("show").innerText = small;
  document.getElementById("show1").innerText = largest;
  document.getElementById("show2").innerText = even;
  document.getElementById("show3").innerText = odd;
  document.getElementById("show4").innerText = positive;
  document.getElementById("show5").innerText = negative;
}
