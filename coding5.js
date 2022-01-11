// operator method
// const jons = {
//   firstname: "swathi",
//   lastname: "golla",
//   age: 1999 - 1980,
//   job: "teaches",
//   friends: ["swathi", "vyshu", "gayi"],
//   hasdriverlicence: true,

// calcage: function (birthyear) {
//   return 2037 - birthyear;
// },
// calcage: function () {
//     this.age = 2037 - this.birthyear;
//     return this.age;
//   },
//   getsummary: function () {
//     return `${this.firstname} is a ${this.calcage()} -years my old ${jons.job}`;
//   },
// };

// console.log(jons.calcage(1990));
// console.log(jons["calcage"](1991));

// console.log(jons.calcage());
// console.log(jons.age);
// console.log(jons.age);
// console.log(jons.age);

// console.log(jons.getsummary());

// challenge

const mark = {
  fullname: "mark golla",
  mass:78,
  height=5.6,
  calcBMI:function(){
    this.bmi=this.mass/this.height**2;
    return this.bmi;
  }

};


const joan = {
  fullname: " joan swathi",
  mass:98,
  height=5.7,
  calcBMI:function(){
    this.bmi=this.mass/this.height**2;
    return this.bmi;
  }
};

mark.calcBMI();
joan.calcBMI();
console.log(mark.calcBMI(),joan.calcBMI())

if (mark.bmi > joan.bmi){
  console.log(`${mark.fullname} BMI `)
}else if(mark.bmi > joan.bmi){
  console.log(`${mark.fullname} BMI `)
}