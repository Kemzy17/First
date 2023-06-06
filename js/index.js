
var mainListDiv = document.getElementById("mainListDiv"),
  mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
  "use strict";

  mainListDiv.classList.toggle("show_list");
  mediaButton.classList.toggle("active");

  // if (document.body.style.overflow === "hidden") {
  //   document.body.style.overflow = "scroll";
  // } else {
  //   document.body.style.overflow = "hidden";
  // }
};

var nav = document.querySelector(".nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 5) {
    nav.classList.add("shadow");
  } else {
    nav.classList.remove("shadow");
  }
});

window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".element");

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight / 1) {
      element.classList.add("animate-fade", "animate-slide");
    } else {
      element.classList.remove("animate-fade", "animate-slide");
    }
  }
});
