// console.log(postWarAloneMaleCharacterBackstories);

// console.log(entertainmentItemsWithWeight);

// console.log(survivalItemsWithWeight);

let randd = (hNumb) => {
  return Math.floor(Math.random() * hNumb);
};
// looking if there is a character
if (!localStorage.mainCharacterName) {
  let temp = randd(10);
  localStorage.locationOfPlayer = ukCities[temp];
  if (randd(2) == 1) {
    // Male character
    localStorage.mainCharacterName = britishMaleFirstNames[randd(10)];
    localStorage.mainCharacterGender = "Male";
    localStorage.picture =
      '<img src="../PICTURES/m' +
      Math.floor(1 + randd(3)) +
      '.png" alt="" class="card-img">';
    localStorage.mainCharacterText =
      localStorage.mainCharacterName +
      startMaleCharacterBackstories[temp] +
      " That was before the war at least.";
    localStorage.mainCharacterAfterWar =
      localStorage.mainCharacterName +
      postWarAloneMaleCharacterBackstories[temp];
  } else {
    // Female character
    localStorage.mainCharacterName = britishFemaleFirstNames[randd(10)];
    localStorage.mainCharacterGender = "Female";
    localStorage.picture =
      '<img src="../PICTURES/f' +
      Math.floor(1 + randd(3)) +
      '.png" alt="" class="card-img">';
    localStorage.mainCharacterText =
      localStorage.mainCharacterName +
      startFemaleCharacterBackstories[temp] +
      " That was before the war at least.";
    localStorage.mainCharacterAfterWar =
      localStorage.mainCharacterName +
      postWarAloneFemaleCharacterBackstories[temp];
  }
  //more character information
  localStorage.mainCharacterLastName = britishLastNames[randd(10)];
  localStorage.age = randd(20) + 18;
  localStorage.mood = possibleMoods[1 + randd(2)];
  localStorage.likes = "playing " + entertainmentItemsWithWeight[randd(7)][0];
  //   Character and shelter inventory

  localStorage.character00 = cannedDrinks[randd(4)][0];
  localStorage.character01 = survivalFoodsWithEnergy[randd(31)][0];
  localStorage.character02 = bottles[0];
  localStorage.character03 = survivalItemsWithWeight[randd(13)][0];
  localStorage.character04 = empty;
  localStorage.character05 = empty;
  localStorage.character06 = empty;
  localStorage.character07 = empty;
  localStorage.character08 = empty;
  localStorage.character09 = empty;
  localStorage.character10 = empty;
  localStorage.character11 = empty;

  //shelter

  localStorage.shelter00 = empty;
  localStorage.shelter01 = empty;
  localStorage.shelter02 = empty;
  localStorage.shelter03 = empty;
  localStorage.shelter04 = empty;
  localStorage.shelter05 = empty;
  localStorage.shelter06 = empty;
  localStorage.shelter07 = empty;
  localStorage.shelter08 = empty;
  localStorage.shelter09 = empty;
  localStorage.shelter10 = empty;
  localStorage.shelter11 = empty;
  localStorage.shelter12 = empty;
  localStorage.shelter13 = empty;
  localStorage.shelter14 = empty;
  localStorage.shelter15 = empty;
  localStorage.shelter16 = empty;
  localStorage.shelter17 = empty;
  localStorage.shelter18 = empty;
  localStorage.shelter19 = empty;
  localStorage.shelter20 = empty;
  localStorage.shelter21 = empty;
  localStorage.shelter22 = empty;
  localStorage.shelter23 = empty;
  //stats
  localStorage.health = "100";
  localStorage.hunger = "100";
  localStorage.thirst = "100";

  //story
  localStorage.fullStory = 0;

  //day
  localStorage.day = 0;
}
let helpingValueShelter = 0;
$("#shelterInventory").hide();
$("#upgradeButton").hide();
// Creating the enviroment
$("#mainCharacterName").text(
  localStorage.mainCharacterName + " " + localStorage.mainCharacterLastName
);
$("#characterContent").text(localStorage.mainCharacterText);
$("#age").text("age: " + localStorage.age);
$("#gender").text("gender: " + localStorage.mainCharacterGender);
$("#mood").text("mood: " + localStorage.mood);
$("#likes").text("enjoys: " + localStorage.likes);
document.querySelector("#mainCharacterFace").innerHTML = localStorage.picture;
$("#killStorage").on("click", function () {
  restartt();
});

//displaying inventory

let characterInventorySet = () => {
  document.querySelectorAll(".bs")[0].innerHTML = localStorage.character00;
  document.querySelectorAll(".bs")[1].innerHTML = localStorage.character01;
  document.querySelectorAll(".bs")[2].innerHTML = localStorage.character02;
  document.querySelectorAll(".bs")[3].innerHTML = localStorage.character03;
  document.querySelectorAll(".bs")[4].innerHTML = localStorage.character04;
  document.querySelectorAll(".bs")[5].innerHTML = localStorage.character05;
  document.querySelectorAll(".bs")[6].innerHTML = localStorage.character06;
  document.querySelectorAll(".bs")[7].innerHTML = localStorage.character07;
  document.querySelectorAll(".bs")[8].innerHTML = localStorage.character08;
  document.querySelectorAll(".bs")[9].innerHTML = localStorage.character09;
  document.querySelectorAll(".bs")[10].innerHTML = localStorage.character10;
  document.querySelectorAll(".bs")[11].innerHTML = localStorage.character11;
  document.querySelectorAll(".ss")[0].innerHTML = localStorage.shelter00;
  document.querySelectorAll(".ss")[1].innerHTML = localStorage.shelter01;
  document.querySelectorAll(".ss")[2].innerHTML = localStorage.shelter02;
  document.querySelectorAll(".ss")[3].innerHTML = localStorage.shelter03;
  document.querySelectorAll(".ss")[4].innerHTML = localStorage.shelter04;
  document.querySelectorAll(".ss")[5].innerHTML = localStorage.shelter05;
  document.querySelectorAll(".ss")[6].innerHTML = localStorage.shelter06;
  document.querySelectorAll(".ss")[7].innerHTML = localStorage.shelter07;
  document.querySelectorAll(".ss")[8].innerHTML = localStorage.shelter08;
  document.querySelectorAll(".ss")[9].innerHTML = localStorage.shelter09;
  document.querySelectorAll(".ss")[10].innerHTML = localStorage.shelter10;
  document.querySelectorAll(".ss")[11].innerHTML = localStorage.shelter11;
  document.querySelectorAll(".ss")[12].innerHTML = localStorage.shelter12;
  document.querySelectorAll(".ss")[13].innerHTML = localStorage.shelter13;
  document.querySelectorAll(".ss")[14].innerHTML = localStorage.shelter14;
  document.querySelectorAll(".ss")[15].innerHTML = localStorage.shelter15;
  document.querySelectorAll(".ss")[16].innerHTML = localStorage.shelter16;
  document.querySelectorAll(".ss")[17].innerHTML = localStorage.shelter17;
  document.querySelectorAll(".ss")[18].innerHTML = localStorage.shelter18;
  document.querySelectorAll(".ss")[19].innerHTML = localStorage.shelter19;
  document.querySelectorAll(".ss")[20].innerHTML = localStorage.shelter20;
  document.querySelectorAll(".ss")[21].innerHTML = localStorage.shelter21;
  document.querySelectorAll(".ss")[22].innerHTML = localStorage.shelter22;
  document.querySelectorAll(".ss")[23].innerHTML = localStorage.shelter23;
};
characterInventorySet();
// this one restarts the game
let characterStatsDisplay = () => {
  $("#health").text("health: " + localStorage.health + "%");
  $("#hunger").text("hunger: " + localStorage.hunger + "%");
  $("#thirst").text("thirst: " + localStorage.thirst + "%");
};
characterStatsDisplay();
//
//
//story display
//
//
//
let storyDisplay = (storyString) => {
  document.querySelector("#storyTeller").innerHTML = storyString;
};
storyDisplay(localStorage.mainCharacterAfterWar);
//
//restart
const restartt = () => {
  localStorage.removeItem("mainCharacterName");
  location.reload();
};
//conditionAdd
let conditionAddremove = (conditionItem) => {
  if (
    conditionItem == document.querySelector("#characterCondition").innerHTML
  ) {
    document.querySelector("#characterCondition").innerHTML = empty;
  } else {
    document.querySelector("#characterCondition").innerHTML = conditionItem;
  }
};
conditionAddremove(empty);
//
//
//

const day1Text = "After a long time around the streats you found a shelter. ";
// Main game
//
//event of the day
let chance = () => {
  let eventOfTheDay;
  //something found
  if (randd(100) > 50) {
    eventOfTheDay = "In search of items.. " + somethingFoundTexts[randd(3)];
    looting(1 + randd(3));
  } else {
    //nothing found
    eventOfTheDay = "In search of items.. " + nothingFoundTexts[randd(3)];
    if (randd(100) > 97) {
      eventOfTheDay = eventOfTheDay + " " + notFeelingWellTexts[randd(3)];
      $("#characterCondition").text(
        sicknessTraitsWithDanger[randd(8)].sickness
      );
    }
  }
  return eventOfTheDay;
};
//
//random Item
//
//
//
function randomItemGive() {
  let item = "T";

  if (randd(100) < 50) {
    item = survivalFoodsWithEnergy[randd(29)][0];
  } else if (randd(100) < 50) {
    item = survivalItemsWithWeight[randd(13)][0];
  } else if (randd(100) < 50) {
    item = craftingParts[randd(11)][0];
  } else if (randd(100) < 25) {
    item = cannedDrinks[randd(4)][0];
  } else if (randd(100) < 5) {
    item = bottles[randd(4)][0];
  } else {
    item = entertainmentItemsWithWeight[randd(7)][0];
  }
  return item;
}
//
//looting function
//
let looting = (rNumb) => {
  let randomItemValue;
  for (let i = 0; i < rNumb; i++) {
    randomItemValue = true;
    if (randomItemValue) {
    }
    for (let j = 0; j < 12; j++) {
      if (
        document.querySelectorAll(".bs")[j].innerHTML === empty &&
        randomItemValue === true
      ) {
        randomItemValue = false;
        switch (j) {
          case 0:
            localStorage.character00 = randomItemGive();
            break;
          case 1:
            localStorage.character01 = randomItemGive();
            break;
          case 2:
            localStorage.character02 = randomItemGive();
            break;
          case 3:
            localStorage.character03 = randomItemGive();
            break;
          case 4:
            localStorage.character04 = randomItemGive();
            break;
          case 5:
            localStorage.character05 = randomItemGive();
            break;
          case 6:
            localStorage.character06 = randomItemGive();
            break;
          case 7:
            localStorage.character07 = randomItemGive();
            break;
          case 8:
            localStorage.character08 = randomItemGive();
            break;
          case 9:
            localStorage.character09 = randomItemGive();
            break;
          case 10:
            localStorage.character10 = randomItemGive();
            break;
          case 11:
            localStorage.character11 = randomItemGive();
            break;
          default:
            break;
        }
        characterInventorySet();
      }
    }
  }
};
//
//
//continue button (the main part of the game xD)
//
//
//
//
//
//
//
//
$("#continue").on("click", function () {
  //
  if (helpingValueShelter == 0) {
    $("#shelterInventory").show();
    $("#upgradeButton").show();
    $("#continue").text("Next Day");
    $("#storyTeller").text(day1Text + restTexts[randd(2)]);
    let storyOfTheDay;
    localStorage.fullStory = day1Text + restTexts[randd(2)] + "<br><br>";
    helpingValueShelter = localStorage.day * 1;
  } else {
    storyOfTheDay = " " + "Day " + (helpingValueShelter + 1) + ": " + chance();
    if (randd(10) < 2) {
      nightEvent();
    }
    localStorage.fullStory =
      localStorage.fullStory + storyOfTheDay + "<br><br>";
    storyDisplay(storyOfTheDay);
    if (document.querySelector("#characterCondition").innerHTML != empty) {
      for (let i = 0; i < 10; i++) {
        if (
          sicknessTraitsWithDanger[i].sickness ==
          document.querySelector("#characterCondition").innerHTML
        ) {
          sick = i;
        }
      }
      damage = sicknessTraitsWithDanger[sick].danger;
      localStorage.health = localStorage.health - damage;
    }

    //stats
    //
    //
    localStorage.hunger = localStorage.hunger - 5;
    localStorage.thirst = localStorage.thirst - 6;
    if (
      1 * localStorage.health < 0 ||
      1 * localStorage.thirst < 0 ||
      1 * localStorage.hunger < 0
    ) {
      if (1 * localStorage.health < 0) {
        died = "The character didn't mind lossing a little too much blood.";
      } else if (1 * localStorage.thirst < 0) {
        died =
          "The character forgot to consider drinking water in order to survive.";
      } else {
        died = "The character's stomach and back came to contact.";
      }
      storyDeathDisplay();
      alert(died);
    }
  }
  helpingValueShelter++;
  $("#storyTitle").text("day " + helpingValueShelter);
  localStorage.day = helpingValueShelter;
  //display
  //
  //
  //
  //
  //
  characterInventorySet();
  characterStatsDisplay();
});

//
//Special Select Slot
$(".bs").on("click", function () {
  specialSlot = this.innerHTML;
  if (specialSlot != empty) {
    $("#useItem").removeClass("semi-visible");
    $("#moveItem").removeClass("semi-visible");
    $("#deleteItem").removeClass("semi-visible");
  } else {
    $("#useItem").addClass("semi-visible");
    $("#deleteItem").addClass("semi-visible");
    $("#moveItem").addClass("semi-visible");
  }
});
//shelter inventory
$(".ss").on("click", function () {
  specialSlot = this.innerHTML;
  if (specialSlot != empty) {
    $("#useItem").removeClass("semi-visible");
    $("#moveItem").removeClass("semi-visible");
    $("#deleteItem").removeClass("semi-visible");
  } else {
    $("#useItem").addClass("semi-visible");
    $("#deleteItem").addClass("semi-visible");
    $("#moveItem").addClass("semi-visible");
  }
});
//Move button
//
//
//
//
//
//
//Move button
$("#moveItem").on("click", function () {
  let moveOne = false;
  let removeOne = false;
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 12; j++) {
      if (
        document.querySelectorAll(".bs")[j].innerHTML === specialSlot &&
        document.querySelectorAll(".ss")[i].innerHTML === empty &&
        removeOne == false
      ) {
        switch (j) {
          case 0:
            localStorage.character00 = empty;
            break;
          case 1:
            localStorage.character01 = empty;
            break;
          case 2:
            localStorage.character02 = empty;
            break;
          case 3:
            localStorage.character03 = empty;
            break;
          case 4:
            localStorage.character04 = empty;
            break;
          case 5:
            localStorage.character05 = empty;
            break;
          case 6:
            localStorage.character06 = empty;
            break;
          case 7:
            localStorage.character07 = empty;
            break;
          case 8:
            localStorage.character08 = empty;
            break;
          case 9:
            localStorage.character09 = empty;
            break;
          case 10:
            localStorage.character10 = empty;
            break;
          case 11:
            localStorage.character11 = empty;
            break;
          default:
            break;
        }
        removeOne = true;
        characterInventorySet();
      }
    }
  }
  for (let i = 0; i < 24; i++) {
    if (
      document.querySelectorAll(".ss")[i].innerHTML === empty &&
      moveOne === false &&
      removeOne == true
    ) {
      moveOne = true;
      document.querySelectorAll(".ss")[i].innerHTML = specialSlot;
    }
  }

  afterButtons();
});
//
//remove item button
//
//
//
//
//
//
//
//
$("#deleteItem").on("click", function () {
  removeItemFunction();
  afterButtons();
});
//
//
//
//
//
//
//Use Button
//
//
$("#useItem").on("click", function () {
  foodUseFunction();
  survivalItemsWithWeightUse();
  characterStatsDisplay();
  afterButtons();
});
let foodUseFunction = () => {
  let useOne = false;
  let itemType = "something";
  //Some items should not be deleted
  //eating food
  for (let i = 0; i < 29; i++) {
    if (survivalFoodsWithEnergy[i][0].includes(specialSlot) && !useOne) {
      $("#storyTeller").text(eatingTexts[randd(2)]);
      localStorage.hunger =
        1 * localStorage.hunger + survivalFoodsWithEnergy[i][1];
      localStorage.thirst =
        1 * localStorage.thirst + survivalFoodsWithEnergy[i][2];

      itemType = "food";
    } else if (specialSlot == "Water bottle") {
      itemType = "food";
      localStorage.thirst = 100;
      $("#storyTeller").text(drinkingTexts[randd(2)]);
    }
  }
  //canned drinks
  for (let i = 0; i < 4; i++) {
    if (cannedDrinks[i][0].includes(specialSlot) && !useOne) {
      $("#storyTeller").text(drinkingCannedTexts[randd(4)]);
      itemType = "food";
      localStorage.hunger = 1 * localStorage.hunger + cannedDrinks[i][1];
      localStorage.thirst = 1 * localStorage.thirst + cannedDrinks[i][2];
    }
  }
  for (let i = 0; i < 7; i++) {
    if (entertainmentItemsWithWeight[i][0].includes(specialSlot) && !useOne) {
      $("#storyTeller").text("You Enjoyed Yourself");
      itemType = "food";
      if (specialSlot == localStorage.likes) {
        moodChange("-");
      } else if (randd(10) > 7) {
        moodChange("-");
      }
    }
  }
  if (specialSlot == "Map and compass") {
    locationFind();
  }
  //max value
  if (1 * localStorage.hunger > 100) {
    localStorage.hunger = 100;
  }
  if (1 * localStorage.thirst > 100) {
    localStorage.thirst = 100;
  }
  //Deleting item that was used
  if (itemType == "food") {
    removeItemFunction();
  }
};
//
//survivalItemsWithWeightUse
//
//

function survivalItemsWithWeightUse() {
  if (specialSlot == "First aid kit") {
    document.querySelector("#characterCondition").innerHTML = empty;
    localStorage.health = 1 * localStorage.health + 5;
    if (1 * localStorage.health > 100) {
      localStorage.health = 100;
    }
  }
}
//
//
//
//
//
//storyAfterDeath
function storyDeathDisplay() {
  $("#playAgain").show();
  $("#fullStoryDisplay").show();
  $("#mainGameDisplay").hide();
  localStorage.fullStory =
    localStorage.fullStory +
    "<br><br><br>" +
    localStorage.mainCharacterName +
    " died. " +
    died +
    "<br><br>" +
    "score: " +
    scoreOfRun();
  document.querySelector("#fullStoryDisplay").innerHTML =
    localStorage.fullStory;
}
//
//
//
$("#playAgain").on("click", function () {
  restartt();
});

let scoreOfRun = () => {
  let moodValue;
  let i = 1;
  if (localStorage.mood == "Normal") {
    moodValue = 1;
  } else if (localStorage.mood == "Sad") {
    moodValue = 0.8;
  } else if (localStorage.mood == "Happy") {
    moodValue = 1.4;
  } else if (localStorage.mood == "Depressed") {
    moodValue = 0.4;
  }
  i = i * localStorage.day;
  i = 10 * (1 * i * moodValue) * locationPoint;
  return i;
};
let nightEvent = () => {
  if (randd(10) < 4) {
    storyOfTheDay = storyOfTheDay + "<br>" + nightmares[randd(4)];
    moodChange("+");
  } else if (randd(10) > 4) {
    storyOfTheDay = storyOfTheDay + "<br>" + happyDreams[randd(4)];
    moodChange("-");
  } else {
    storyOfTheDay =
      storyOfTheDay +
      "<br>" +
      "You woke up during the night, Nothing seems to be out of order.";
  }
};
//mood change function
function moodChange(string) {
  if (string == "+" && localStorage.mood != "Depressed") {
    localStorage.mood =
      possibleMoods[1 + possibleMoods.indexOf(localStorage.mood)];
  } else if (string == "-" && localStorage.mood != "Happy") {
    localStorage.mood =
      possibleMoods[possibleMoods.indexOf(localStorage.mood) - 1];
  }
  $("#mood").text("mood: " + localStorage.mood);
}
//location
function locationFind() {
  alert("You Found out your location: " + localStorage.locationOfPlayer);
  locationPoint = 2;
}
