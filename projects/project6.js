// const boxes = document.querySelectorAll(".box");

// window.addEventListener("scroll", scrolling);

// scrolling();

// function scrolling() {
//   const triggerBottom = window.innerHeight * (4 / 5);
//   boxes.forEach((box) => {
//     const boxTop = box.getBoundingClientRect().top;
//     if (triggerBottom > boxTop) {
//       box.classList.add("show");
//     } else {
//       box.classList.remove("show");
//     }
//   });
// }

$(window).scroll(function () {
  const scroll = $(window).scrolling();
  const triggerBottom = window.innerHeight * (4 / 5);
  function scrolling() {
    const triggerBottom = window.innerHeight * (4 / 5);
    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      if (triggerBottom > boxTop) {
        $(".box").addClass("show");
      } else {
        $(".box").removeClass("show");
      }
    });
  }
});
