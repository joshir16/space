/** @format */

const slides = document.querySelectorAll(".tech__slide");
const btnBox = document.querySelector(".tech__btns");
const allBtns = document.querySelectorAll(".tech__btns__btn");

// -------------------------------------

slides.forEach((s, i) => {
  s.style.transform = `translateX( ${100 * i}%)`;
});

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX( ${100 * (i - slide)}%)`;
  });
};

btnBox.addEventListener("click", function (e) {
  if (e.target.classList.contains("tech__btns__btn")) {
    // remove active dot
    allBtns.forEach(function (btn) {
      btn.classList.remove("active__btn");
    });

    const slideNum = e.target.dataset.num;

    goToSlide(slideNum);

    // add active dot
    e.target.classList.add("active__btn");
  }
});
