// let arr = [10, 20, 30, -8, 7, 6];
// arr = Number(document.getElementById("N").value);
// smallest;
// function smallest(arr) {
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//   }
//   return min;
// }
// // largest
// function largest(arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// // even
// function even(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       console.log("even numbers" + "" + arr[i]);
//     }
//   }
// }
// // odd
// function odd(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 1) {
//       console.log("odd numbers" + "" + arr[i]);
//     }
//   }
// }
// // positive
// function pos(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       console.log("positive numbers" + "" + arr[i]);
//     }
//   }
// }
// // negative
// function neg(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       console.log("negative numbers" + "" + arr[i]);
//     }
//   }
// }
// pos(arr);
// neg(arr);
// even(arr);
// odd(arr);
// largest(arr);
// smallest(arr);

// function hight(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       console.log("negative numbers" + "" + arr[i]);
//     } else if (arr[i] > 0) {
//       console.log("positive numbers" + "" + arr[i]);
//     } else if (arr[i] % 2 == 1) {
//       console.log("odd numbers" + "" + arr[i]);
//     } else if (arr[i] % 2 == 0) {
//       console.log("even numbers" + "" + arr[i]);
//     } else if (max < arr[i]) {
//       max = arr[i];
//     }
//     return max;
//   }
//   if (min > arr[i]) {
//     min = arr[i];
//   }
//   return min;
// }

function hight() {
  var text = document.getElementById("N").value;
  // var numWords = 0;
  let min = N[0];
  for (let i = 0; i < N.length; i++) {
    if (min > N[i]) {
      min = N[i];
    }
  }
  return min;
  document.getElementById("show").innerHTML = min;

  let max = N[0];
  var text = document.getElementById("N").value;
  for (let i = 0; i < N.length; i++) {
    if (max < N[i]) {
      max = N[i];
    }
  }
  return max;
  document.getElementById("show1").innerHTML = max;
  var text = document.getElementById("N").value;
  for (let i = 0; i < N.length; i++) {
    if (N[i] % 2 == 0) {
      document.getElementById("show2").innerHTML = N[i];
    }
  }
  var text = document.getElementById("N").value;
  for (var i = 0; i < N.length; i++) {
    if (N[i] % 2 == 1) {
      document.getElementById("show3").innerHTML = N[i];
    }
  }
  var text = document.getElementById("N").value;
  for (let i = 0; i < N.length; i++) {
    if (N[i] > 0) {
      document.getElementById("show4").innerHTML = N[i];
    }
  }
  var text = document.getElementById("N").value;
  for (var i = 0; i < N.length; i++) {
    if (N[i] < 0) {
      document.getElementById("show5").innerHTML = N[i];
    }
  }
}
