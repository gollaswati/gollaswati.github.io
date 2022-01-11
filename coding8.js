// challenge 4
const caltip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bill = [22, 11, 123, 12, 34, 55, 45, 78, 99, 200];

const tips = [];
const totals = [];

for (let i = 0; i < bill.length; i++) {
  const tip = caltip(bill[i]);
  tips.push(tip);
  totals.push(tip + bill[i]);
}

console.log(bill, tips, totals);

const calavge = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  // console.log(sum);
  return sum / arr.length;
};
console.log(calavge([2, 4, 6]));
console.log(calavge(totals));
console.log(calavge(tips));
