// "use strict";

// let hasDriverlicence = false;

// const passtext = true;

// if (passtext) hasDriverlicence = true;
// if (hasDriverlicence) console.log("i can drive");

// const interface = "audio";

// const private = 534;

// functions
// function logger() {
//   console.log("my name is swathi");
// }
// calling functin
// logger();
// logger();
// logger();

// function fruitprocessor(apples, graps) {
//   console.log(apples, graps);
//   const juice = `juice with ${apples} apples and ${graps} graps`;
//   return juice;
// }
// const applejuice = fruitprocessor(5, 0);

// console.log(applejuice);

// console.log(fruitprocessor(5, 0));

// const applegrapejuice = fruitprocessor(2, 4);
// console.log(applegrapejuice);

// const num = Number("23");

// functions

// function calage1(birthyear) {
//   const age = 2037 - birthyear;
// }

// const age = calage1(1999);

// functions declarations
// function calcage(birthyear) {
//   return 2037 - birthyear;
// }
// const age1 = calcage(1991);

// console.log(age1);
// function expression
// const calcage2 = function (birthyear) {
//   return 2037 - birthyear;
// };

// const age2 = calcage2(1991);

// console.log(age1, age2);

// const getRectArea = function (width, height) {
//   return width * height;
// };

// console.log(getRectArea(3, 4));

// arrow expressions
// const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

// console.log(materials.map((material) => material.length));

const calcage2 = function (birthyear) {
  return 2037 - birthyear;
};

// arrow

const calcage3 = (birthyear) => 2037 - birthyear;

const age3 = calcage3(1991);

console.log(age3);
