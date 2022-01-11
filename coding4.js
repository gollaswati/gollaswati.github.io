// introducing of objects
// const jonarray = [
//   "swathi",
//   "golla",
//   1000 - 900,
//   "happy",
//   ["swathi", "happy", "fun"],
// ];

// const jons = {
//   firstname: "swathi",
//   lastname: "golla",
//   age: 1999 - 1980,
//   job: "teaches",
// };

//dots vs brackets
const jons = {
  firstname: "swathi",
  lastname: "golla",
  age: 1999 - 1980,
  job: "teaches",
  friends: ["swathi", "vyshu", "gayi"],
};

console.log(jons);

console.log(jons.firstname);

console.log(jons[`firstname`]);

const namekey = "name";

console.log(jons[`first` + namekey]);
console.log(jons[`last` + namekey]);

const interpreted = prompt(
  "what do you want to no about jons firstname,lastname,job,year"
);

// console.log(jons.promptinterpreted); //doest exit jons not a property
// insted of dot notation we use braket
// console.log(jons[interpreted]);

if (jons[interpreted]) {
  console.log(jons[interpreted]);
} else {
  console.log("wrong request");
}

jons.location = "madhnapali";

jons["twitter"] = "@jonsmadhanapallli";

console.log(jons);
// challenge
// jons has three friend and best friend is swathi

console.log(
  `${jons.firstname} has ${jons.friends.length} and his best friend is ${jons.friends[0]}`
);
