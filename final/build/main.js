let tireRightFlag = false;

const navObj = document.querySelector("#nav");
const buttonObj = document.querySelector("#button");
const tireObj = document.querySelector(".tire");

const music_1 = document.querySelector(".music_1");
const merch_2 = document.querySelector(".merch_2");
const video_3 = document.querySelector(".video_3");
const photodiary_4 = document.querySelector(".photodiary_4");

// click animation
buttonObj.addEventListener("click", () => {
  tireObj.classList.toggle("tire_move");
  if (tireRightFlag == false) {
    music_1.classList.add("music_1--FADEin");
    music_1.classList.remove("music_1--FADEout");
    merch_2.classList.add("merch_2--FADEin");
    merch_2.classList.remove("merch_2--FADEout");
    video_3.classList.add("video_3--FADEin");
    video_3.classList.remove("video_3--FADEout");
    photodiary_4.classList.add("photodiary_4--FADEin");
    photodiary_4.classList.remove("photodiary_4--FADEout");
    tireRightFlag = true;
  } else {
    music_1.classList.remove("music_1--FADEin");
    music_1.classList.add("music_1--FADEout");
    merch_2.classList.remove("merch_2--FADEin");
    merch_2.classList.add("merch_2--FADEout");
    video_3.classList.remove("video_3--FADEin");
    video_3.classList.add("video_3--FADEout");
    photodiary_4.classList.remove("photodiary_4--FADEin");
    photodiary_4.classList.add("photodiary_4--FADEout");
    tireRightFlag = false;
  }
});

