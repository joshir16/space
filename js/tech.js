/** @format */

const btnBox = document.querySelector(".tech__btns");

const btns = document.querySelectorAll(".tech__btns__btn");

const techName = document.querySelector(".tech__text__heading");
const techPara = document.querySelector(".tech__text__para");
const techImg = document.querySelector(".tech__img");

// --------------------------------------------------------
let dataNum = 0;
// =========================================================

const techFunc = function (datanum) {
  if (datanum === "0") {
    //..........................................
    techName.innerText = "Launch Vehicle";
    techPara.innerText = `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to
      Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
      in operation. Standing 150 metres tall, it's quite an awe-inspiring
      sight on the launch pad!`;
  } else if (datanum === "1") {
    techName.innerText = "Spaceport";
    techPara.innerText =
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
  } else if (datanum === "2") {
    techName.innerText = "Space Capsule";
    techPara.innerText =
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
  }
};

// =========================================================

btnBox.addEventListener("click", function (e) {
  btns.forEach((btn) => {
    btn.classList.remove("active__btn");
  });

  if (e.target.classList.contains("tech__btns__btn")) {
    dataNum = e.target.dataset.num;

    techFunc(dataNum);
    e.target.classList.add("active__btn");
  }
});
