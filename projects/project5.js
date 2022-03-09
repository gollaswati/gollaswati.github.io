// const loadingText = document.querySelector(".loading-text");
// const bg = document.querySelector(".bg");

// var load = 0;
// var int = setInterval(blurring, 30);

// function blurring() {
//   load++;
//   if (load > 99) {
//     clearInterval(int);
//   }

//   loadingText.innerHTML = `${load}%`;
//   // console.log(`${load}%`);
//   loadingText.style.opacity = scale(load, 0, 100, 1, 0);
//   bg.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`;
// }

// const scale = (num, in_min, in_max, out_min, out_max) => {
//   return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
// };

// jquery;

$(document).keypress(function () {
  let load = 0;
  let int = setInterval(blurring, 50);

  function blurring() {
    load++;
    if (load > 99) {
      clearInterval(int);
    }

    $(".loading-text").text(`${load}%`);
    console.log(`${load}%`);
    $(".loading-text").css("opacity", "scale(load, 0, 100, 1, 0)");

    $("section")
      .filter(".bg")
      .css("filter", `blur(${scale(load, 0, 100, 20, 0)}px)`);
  }
});

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
