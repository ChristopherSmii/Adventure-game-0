let specialSlot = "solid";
let damage = 0;
let sick;
const empty = "Empty";
let died;
locationPoint = 1;
const afterButtons = () => {
  localStorage.character00 = document.querySelector("#cs0").innerHTML;
  localStorage.character01 = document.querySelector("#cs1").innerHTML;
  localStorage.character02 = document.querySelector("#cs2").innerHTML;
  localStorage.character03 = document.querySelector("#cs3").innerHTML;
  localStorage.character04 = document.querySelector("#cs4").innerHTML;
  localStorage.character05 = document.querySelector("#cs5").innerHTML;
  localStorage.character06 = document.querySelector("#cs6").innerHTML;
  localStorage.character07 = document.querySelector("#cs7").innerHTML;
  localStorage.character08 = document.querySelector("#cs8").innerHTML;
  localStorage.character09 = document.querySelector("#cs9").innerHTML;
  localStorage.character10 = document.querySelector("#cs10").innerHTML;
  localStorage.character11 = document.querySelector("#cs11").innerHTML;

  localStorage.shelter00 = document.querySelector("#ss0").innerHTML;
  localStorage.shelter01 = document.querySelector("#ss1").innerHTML;
  localStorage.shelter02 = document.querySelector("#ss2").innerHTML;
  localStorage.shelter03 = document.querySelector("#ss3").innerHTML;
  localStorage.shelter04 = document.querySelector("#ss4").innerHTML;
  localStorage.shelter05 = document.querySelector("#ss5").innerHTML;
  localStorage.shelter06 = document.querySelector("#ss6").innerHTML;
  localStorage.shelter07 = document.querySelector("#ss7").innerHTML;
  localStorage.shelter08 = document.querySelector("#ss8").innerHTML;
  localStorage.shelter09 = document.querySelector("#ss9").innerHTML;
  localStorage.shelter10 = document.querySelector("#ss10").innerHTML;
  localStorage.shelter11 = document.querySelector("#ss11").innerHTML;
  localStorage.shelter12 = document.querySelector("#ss12").innerHTML;
  localStorage.shelter13 = document.querySelector("#ss13").innerHTML;
  localStorage.shelter14 = document.querySelector("#ss14").innerHTML;
  localStorage.shelter15 = document.querySelector("#ss15").innerHTML;
  localStorage.shelter16 = document.querySelector("#ss16").innerHTML;
  localStorage.shelter17 = document.querySelector("#ss17").innerHTML;
  localStorage.shelter18 = document.querySelector("#ss18").innerHTML;
  localStorage.shelter19 = document.querySelector("#ss19").innerHTML;
  localStorage.shelter20 = document.querySelector("#ss20").innerHTML;
  localStorage.shelter21 = document.querySelector("#ss21").innerHTML;
  localStorage.shelter22 = document.querySelector("#ss22").innerHTML;
  localStorage.shelter23 = document.querySelector("#ss23").innerHTML;
  specialSlot = empty;
  $("#useItem").addClass("semi-visible");
  $("#deleteItem").addClass("semi-visible");
  $("#moveItem").addClass("semi-visible");
};
let removeItemFunction = () => {
  let removeOne = false;
  for (let i = 0; i < 12; i++) {
    if (
      document.querySelectorAll(".bs")[i].innerHTML == specialSlot &&
      removeOne == false
    ) {
      if (specialSlot != "Water bottle") {
        document.querySelectorAll(".bs")[i].innerHTML = empty;
        removeOne = true;
      } else {
        document.querySelectorAll(".bs")[i].innerHTML = "Empty bottle";
      }
    }
  }
  for (let i = 0; i < 24; i++) {
    if (
      document.querySelectorAll(".ss")[i].innerHTML == specialSlot &&
      removeOne == false
    ) {
      if (specialSlot != "Water bottle") {
        removeOne = true;
        document.querySelectorAll(".ss")[i].innerHTML = empty;
      } else {
        document.querySelectorAll(".ss")[i].innerHTML = "Empty bottle";
      }
    }
  }
};
$("#playAgain").hide();
$("#fullStoryDisplay").hide();
