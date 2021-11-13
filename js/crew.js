/** @format */

"use strict";

const slides = document.querySelectorAll(".slide");
const dotBox = document.querySelector(".dots__box");
const allDots = document.querySelectorAll(".dot");

slides.forEach((s, i) => {
  s.style.transform = `translateX( ${100 * i}%)`;
});

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX( ${100 * (i - slide)}%)`;
  });
};

dotBox.addEventListener("click", function (e) {
  // remove active dot
  allDots.forEach(function (dot) {
    dot.classList.remove("active__dot");
  });

  if (e.target.classList.contains("dot")) {
    const slideNum = e.target.dataset.slide;
    goToSlide(slideNum);

    // add active dot
    e.target.classList.add("active__dot");
  }
});
