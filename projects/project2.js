const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

var currentActive = 1;
next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  // Update Active class in circle
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // Update the progress Bar
  var activeCircles = document.querySelectorAll(".active");

  progress.style.width =
    ((activeCircles.length - 1) / (circles.length - 1)) * 100 + "%";

  // Change the button enabled and disabled state
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

// jquery second

$("#next").click(function () {
  $(".circle1").addClass("active");
  $(".progress").css("width", "33.333%");
  $(".btn").removeAttr("disabled");

  $("#next").click(function () {
    $(".circle2").addClass("active");
    $(".progress").css("width", "66.6667%");

    $("#next").click(function () {
      $(".circle3").addClass("active");
      $(".progress").css("width", "100%");
      $(".hide").prop("disabled", true);
    });
  });
});

$("#prev").click(function () {
  $(".circle3").addClass("active");
  $(".progress").css("width", "66.667%");
  $(".hide").removeAttr("disabled");

  $("#prev").click(function () {
    $(".circle2").addClass("active");
    $(".progress").css("width", "33.333%");

    $("#prev").click(function () {
      $(".circle1").addClass("active");
      $(".progress").css("width", "0%");
      $(".hide1").prop("disabled", true);
    });
  });
});
