// using google ,stokesoverflow and mdn
// "use strict";
// const temparature = [1, 0, -1, -10, 12];
// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i <= temps.length; i++) {
//     const curtemp = temps[i];
//     if (typeof curtemp !== "number") continue;
//     if (temps[i] > max) max = curtemp;
//     if (temps[i] < min) min = curtemp;
//   }
//   // console.log(max);
//   // console.log(min);
//   console.log(max, min);
//   return max - min;
// };
// // calcTempAmplitude([3, 7, 4, 32]);
// const apptitude = calcTempAmplitude(temparature);
// console.log(apptitude);
// // max=3
// //max=7
// //max=32
// const calcTempAmplitudenew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i <= temps.length; i++) {
//     const curtemp = temps[i];
//     if (typeof curtemp !== "number") continue;
//     if (temps[i] > max) max = curtemp;
//     if (temps[i] < min) min = curtemp;
//   }
//   // console.log(max);
//   // console.log(min);
//   console.log(max, min);
//   return max - min;
// };
// // calcTempAmplitude([3, 7, 4, 32]);
// const apptitudenew = calcTempAmplitudenew([1, 3, 5], [4, 6, 7]);
// console.log(apptitudenew);

// const array1 = ["a", "b", "c"];
// const array2 = ["c", "d", "f"];
// const array3 = array1.concat(array2);
// console.log(array3);

// // debugging

// const measurekelvin = function () {
//   const mesurement = {
//     type: "temp",
//     unit: "cels",
//     // fix
//     // value: Number(prompt("degree celciuous")),
//     value: 10,
//   };
//   // find
//   console.table(mesurement);
//   // console.log(mesurement);

//   // console.log(mesurement.value);
//   // console.warn(mesurement.value);
//   // console.error(mesurement.value);
//   const kelvin = mesurement.value + 273;
//   return kelvin;
// };
// // identify
// console.log(measurekelvin());
