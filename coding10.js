// challenge

const data1 = [17, 32, 19];
const data2 = [12, -5, 0, 8];
console.log(`...${data1[0]}oc...${data1[1]}oc...${data1[2]}oc...`);

const printcost = function (arr) {
  let str = "";
  for (let i = 0; i <= arr.length; i++) {
    str = str + `${arr[i]}oC in ${i + 1} days`;
  }
  console.log(str);
};
printcost(data1);
