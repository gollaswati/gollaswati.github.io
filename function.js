// function addNum(a, b) {
//   var a = 10;
//   var b = 20;
//   var total = a + b;
//   console.log(total);
// }
// addNum();
// function subNum(a, b) {
//   var a = 10;
//   var b = 20;
//   var total = a - b;
//   console.log(total);
// }
// subNum();
// function showMessage() {
//   let message = "Hello, " + userName;
//   document.write(message);
// }
// showMessage();
function message() {
  let message = "hello everyone";
  let message1 = "hi";
  let message2 = "hello";
  let numbers = "1,2,3,4,5,6,7,8,9";
  console.log(message, message1, message2, numbers);
  console.log(message);
  console.log(message1);
  console.log(message2);
  console.log(numbers);
}
message();
// local variables
// function showMessage() {
//   let message = "Hello, my name is swathi"; // local variable

//   document.write(message);
// }
// showMessage();
// global variables
// let userName = "John";

// function showMessage() {
//   let message = "Hello, " + userName;
//   document.write(message);
// }
// showMessage();
// let userName = "John";

// function showMessage() {
//   userName = "Bob"; // (1) changed the outer variable

//   let message = "Hello, " + userName;
//   document.write(message);
// }

// document.write(userName); // John before the function call

// showMessage();

// document.write(userName); // Bob, the value was modified by the function
// function sum(a, b) {
//   return a + b;
// }

// let result = sum(1, 2);
// alert(result); // 3
// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm("Do you have permission from your parents?");
//   }
// }

// let age = prompt("How old are you?", 18);

// if (checkAge(age)) {
//   alert("Access granted");
// } else {
//   alert("Access denied");
// }
// function showMovie(age) {
//   if (!checkAge(age)) {
//     return;
//   }

//   alert("Showing you the movie"); // (*)
//   // ...
// }
