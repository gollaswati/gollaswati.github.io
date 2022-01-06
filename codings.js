// const hasDriverlicence = true;
// const hasGoodvision = true;

// console.log(hasDriverlicence && hasGoodvision);
// console.log(hasDriverlicence || hasGoodvision);
// console.log(!hasDriverlicence);

// const shoudDrive = hasDriverlicence && hasGoodvision;

// if (shoudDrive) {
//   console.log("can drive");
// } else {
//   console.log("some one can drive");
// }

// const istried = true;
// console.log(hasDriverlicence && hasGoodvision && istried);

// if (hasDriverlicence && hasGoodvision && istried) {
//   console.log("can drive");
// } else {
//   console.log("some one can drive");
// }

// coding challenge threee

// const scoredoll = (96 + 108 + 90) / 3;
// const scoreecate = (90 + 10 + 100) / 3;

// console.log(scoredoll, scoreecate);

// if (scoredoll > scoreecate) {
//   console.log("dolphis win");
// } else if (scoredoll > scoreecate) {
//   console.log("dolphis lost");
// } else if (scoredoll === scoreecate) {
//   console.log("no one win");
// } else {
//   console.log("no one");
// }

// const scoredoll = (96 + 108 + 190) / 3;
// const scoreecate = (90 + 10 + 100) / 3;

// console.log(scoredoll, scoreecate);

// if (scoredoll > scoreecate && scoredoll >= 100) {
//   console.log("dolphis win");
// } else if (scoredoll > scoreecate) {
//   console.log("dolphis lost");
// } else if (scoredoll === scoreecate && scoredoll >= 100) {
//   console.log("no one win");
// } else {
//   console.log("no one");
// }

// swithch statement

const day = "monday";

switch (day) {
  case "monday":
    console.log("plan course structure");
    console.log("go to coding meet up");
    break;
  case "tuesday":
    console.log("go to coding meet ");
    break;
  case "wendsday":
  case "thursday":
    console.log("go coding meet up");
    break;
  case "friday":
    console.log("go tomeet up");
    break;
  case "saturday":
  case "sunday":
    console.log("go to codingup");
    break;
  default:
    console.log("invalid day");
}

// if (day === "monday") {
//   console.log("plan course structure");
//   console.log("go to coding meet up");
// } else if (day == "tueasday") {
//   console.log("go to coding meet ");
// } else if (day == "wendsday" || day == "thursday") {
//   console.log("go coding meet up");
// } else if (day == "fryday") {
//   console.log("go tomeet up");
// } else if (day == "saturday" || day == "sunday") {
//   console.log("go to codingup");
// } else {
//   console.log("invalid data");
// }

// statements and expressions

// 3 + 4;
// 1999;
// true && fasle && !true;
// 1 || 0 && !0
// if (23 > 10) {
//   const str = "23 is bigger";
// }

// const me = "swathi";
// console.log(`iam ${2037 - 1991} yeras old${me}`);

//the condition oparator

const age = 10;

age >= 18
  ? console.log("my name is swathi")
  : console.log("i like to drink water");

const age = 23;

age >= 18
  ? console.log("my name is swathi")
  : console.log("i like to drink water");

const drink = age >= 18 ? "wine" : "water";

console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "water";
// }
// console.log(drink2);

// console.log(`i like to  ${age >= 18 ? "wine" : "water"}`);

// challenge 4

// const bill = 277;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 2;

// console.log(`the bill was ${bill} ,the tip is ${tip} both ${bill + tip}`);
