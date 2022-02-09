let arr = [10, 20, 30, -8, 7, 6];
// arr = Number(document.getElementById("N").value);
// smallest
function smallest(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}
// largest
function largest(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
// even
function even(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      console.log("even numbers" + "" + arr[i]);
    }
  }
}
// odd
function odd(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      console.log("odd numbers" + "" + arr[i]);
    }
  }
}
// positive
function pos(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      console.log("positive numbers" + "" + arr[i]);
    }
  }
}
// negative
function neg(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      console.log("negative numbers" + "" + arr[i]);
    }
  }
}
pos(arr);
neg(arr);
even(arr);
odd(arr);
largest(arr);
smallest(arr);
