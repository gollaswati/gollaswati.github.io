// let a = document.getElementsByClassName("calc1");
// let b = document.getElementsByClassName("calc2");
// function addition(a, b) {
//   var sum = a + b;
//   console.log(sum);
// }

// function substarct(a, b) {
//   var sub = a - b;
//   console.log(sub);
// }
// function product(a, b) {
//   var multi = a * b;
//   console.log(multi);
// }
// function div(a, b) {
//   var division = a / b;
//   console.log(division);
// }
let arr = [10, 20, 30, -8, 7, 6];
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
function pos(arr) {
  for (let i = 0; i < arr.length ; i++) {
  if(arr[i] % 2 == 0) {
  console.log(arr[i])
  }
  }
  // odd
  function (arr) {
    for(var i=0;i<arr.length;i++) {
    if(arr[i]%2==1) {
    console.log(arr[i]) 
    }
    }
  // positive
  function pos(arr) {
    for(var i = 0 ; i < arr.length ; i++) {
    if(arr[i] > 0) {
    cnsole.log(arr[i]) 
    }
    }
    // negative
    function neg(arr) {
      for(var i=0;i<arr.length;i++) {
      if(arr[i]<0) {
      console.log(arr[i]) 
      }
      }
let sm = smallest(arr);
let lrg = largest(arr);
console.log(sm, lrg);
