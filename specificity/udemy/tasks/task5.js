function getAge() {
  let currentdate = 14;
  let currentmonth = 2;
  let currentyear = 2022;
  let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let a = document.getElementById("demo").value;
  a = a.split("/");
  let birthdate = a[0];
  let birthmonth = a[1];
  let birthyear = a[2];
  let agedays = 0;
  let agemonth = 0;
  let ageyear = 0;

  // agedays = days[birthmonth - 1] - birthdate + currentdate;
  agedays = currentdate - birthdate;
  agemonth = currentmonth - birthmonth;
  ageyear = currentyear - birthyear;
  let totaldays = (ageyear * 12 + agemonth) * 30 + agedays;
  let minutes = totaldays * 24 * 60;
  let seconds = totaldays * 24 * 60 * 60;
  document.getElementById("demo1").innerText = "age in minutes : " + minutes;
  document.getElementById("demo2").innerText = "age in second :  " + seconds;
}
