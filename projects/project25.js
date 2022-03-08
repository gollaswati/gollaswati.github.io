const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}
// const pink = document.querySelector(".pink");
// window.addEventListener("scroll", fixPink);

// function fixPink() {
//   if (window.scrollY > pink.offsetHeight + 350) {
//     pink.classList.add("active");
//   } else {
//     pink.classList.remove("active");
//   }
// }
