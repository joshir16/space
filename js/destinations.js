/** @format */

"use strict";

let destImage = document.getElementById("destination__img");
let destName = document.getElementById("destination__text__heading");
let destPara = document.getElementById("destination__text__para");

let destDistance = document.getElementById("destination__dist");
let destTime = document.getElementById("destination__time");

const navList = document.querySelector(".destination__nav");

const navLink = document.querySelectorAll(".destination__nav__link");

let dataSet = 0;
// =========================================================

const destination = function (dataSet) {
  if (dataSet === "0") {
    destImage.src = "img/destination/image-moon.png";
    destName.innerText = "Moon";
    destPara.innerText = `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`;
    destDistance.innerText = "384,400 Km";
    destTime.innerText = "3 days";
  } else if (dataSet === "1") {
    destImage.src = "img/destination/image-mars.png";
    destName.innerText = "Mars";
    destPara.innerText = `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`;
    destDistance.innerText = "225 Mil. Km";
    destTime.innerText = "9 Months";
  } else if (dataSet === "2") {
    destImage.src = "img/destination/image-europa.png";
    destName.innerText = "Europa";
    destPara.innerText = `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`;
    destDistance.innerText = "628 Mil. Km";
    destTime.innerText = "3 Years";
  } else if (dataSet === "3") {
    destImage.src = "img/destination/image-titan.png";
    destName.innerText = "Titan";
    destPara.innerText = `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`;
    destDistance.innerText = "1.6 Bil. Km";
    destTime.innerText = "7 Years";
  }
};

// =========================================================

navList.addEventListener("click", function (e) {
  if (e.target.classList.contains("destination__nav__link")) {
    // remove active link
    navLink.forEach(function (link) {
      link.classList.remove("active__link");
    });

    dataSet = e.target.dataset.slide;

    e.target.classList.add("active__link");
    destination(dataSet);
  }
});
