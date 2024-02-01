const britishLastNames = [
  "Smith",
  "Jones",
  "Taylor",
  "Brown",
  "Williams",
  "Wilson",
  "Evans",
  "Johnson",
  "Roberts",
  "Walker",
];
const britishMaleFirstNames = [
  "James",
  "William",
  "John",
  "George",
  "Thomas",
  "Charles",
  "Robert",
  "Edward",
  "Henry",
  "Arthur",
];
const britishFemaleFirstNames = [
  "Emma",
  "Olivia",
  "Sophia",
  "Amelia",
  "Isabella",
  "Ava",
  "Mia",
  "Grace",
  "Ella",
  "Charlotte",
];
const startFemaleCharacterBackstories = [
  ", an aspiring artist, seeks inspiration in the hidden corners of the city.",
  ", a detective with a mysterious past, unravels dark secrets in her pursuit of justice.",
  ", an adventurous archaeologist, travels the globe in search of ancient artifacts.",
  ", a talented musician, strives to make her mark on the vibrant music scene.",
  ", a tech genius, battles corporate intrigue while revolutionizing the tech industry.",
  ", a passionate environmentalist, fights to protect wildlife and preserve nature.",
  ", a skilled pilot, races against time in high-stakes missions to save lives.",
  ", a charismatic journalist, digs into scandals and uncovers the truth behind the headlines.",
  ", a time-travel researcher, navigates through different eras to solve a family mystery.",
  ", a resilient survivor, rebuilds her life after overcoming a challenging past.",
];
const startMaleCharacterBackstories = [
  ", a former military operative haunted by his past, seeks redemption through acts of heroism.",
  ", a brilliant inventor, races against time to prevent his groundbreaking technology from falling into the wrong hands.",
  ", a detective with a keen mind, navigates the gritty streets of the city to solve complex cases and bring criminals to justice.",
  ", a seasoned explorer, embarks on a perilous journey to uncover ancient mysteries hidden in uncharted lands.",
  ", a skilled chef, dreams of opening his own restaurant and showcasing his unique fusion of flavors to the world.",
  ", a reclusive artist, finds solace in his creations but is compelled to share his masterpieces with the world despite his reservations.",
  ", a charismatic and ambitious politician, faces moral dilemmas as he strives to bring positive change to a corrupt system.",
  ", a haunted paranormal investigator, confronts supernatural forces while wrestling with his own inner demons.",
  ", a dedicated scientist, makes groundbreaking discoveries that have the potential to reshape the future of medicine.",
  ", a skilled swordsman, roams the land righting wrongs and protecting the innocent in a world filled with danger.",
];
const possibleMoods = ["Happy", "Normal", "Sad", "Depressed"];
const survivalItemsWithWeight = [
  ["Bottled water", 1.5],
  ["First aid kit", 0.8],
  ["Multi-tool", 0.3],
  ["Flashlight with extra batteries", 0.5],
  ["Emergency shelter (tent or space blanket)", 1.0],
  ["Firestarter (matches, lighter)", 0.1],
  ["Map and compass", 0.2],
  ["Personal hygiene items (toothbrush, soap)", 0.3],
  ["Emergency whistle", 0.05],
  ["Medications (pain relievers, allergy medicine)", 0.2],
  ["Portable water purification tablets", 0.1],
  ["Sleeping bag", 1.2],
  ["Signal mirror", 0.1],
  ["Multi-vitamins", 0.1],
];
const craftingParts = [
  "Scrap Metal",
  "Wooden Planks",
  "Multi-tool",
  "Nails",
  "Duct Tape",
  "Bolts",
  "Leather Strips",
  "Glass Shards",
  "Copper Wire",
  "Thread",
  "Rivets",
];
const entertainmentItemsWithWeight = [
  ["Chess", "board game", 2],
  ["Acoustic guitar", "musical instrument", 5],
  ["Jenga", "board game", 0.8],
  ["Harmonica", "musical instrument", 0.5],
  ["Scrabble", "board game", 0.5],
  ["Ukulele", "musical instrument", 1],
  ["Catan", "board game", 0.5],
];
const survivalFoodsWithEnergy = [
  ["Canned Beans", 15],
  ["Dried Fruit Mix", 12],
  ["Energy Bars", 18],
  ["Wild Berries", 9],
  ["Dehydrated Vegetables", 10],
  ["Jerky (Beef)", 20],
  ["Canned Soup", 16],
  ["Nuts and Seeds", 13],
  ["Pemmican", 22],
  ["Granola with Honey", 19],
  ["Trail Mix", 17],
  ["MRE (Meal Ready-to-Eat)", 25],
  ["Instant Oatmeal", 16],
  ["Crackers", 11],
  ["Powdered Milk", 12],
  ["Canned Tuna", 17],
  ["Chocolate Bars", 20],
  ["Rice and Beans", 21],
  ["Hardtack", 10],
  ["Peanut Butter", 18],
  ["Lentils", 14],
  ["Quinoa", 20],
  ["Canned Vegetables", 13],
  ["Protein Powder", 25],
  ["Instant Ramen", 19],
  ["Honey", 16],
  ["Canned Fruit", 14],
  ["Freeze-Dried Ice Cream", 18],
  ["Dried Fish", 22],
  ["Soylent Green", 30],
];
const meleeWeaponsWithWeight = [
  ["Combat knife", 0.5],
  ["Baseball bat", 1.0],
  ["Machete", 1.2],
  ["Crowbar", 1.5],
  ["Brass knuckles", 0.3],
  ["Tactical tomahawk", 1.8],
];
const rangedWeaponsWithWeight = [
  ["Pistol", 1.2],
  ["Shotgun", 3.0],
  ["Assault rifle", 4.5],
  ["Crossbow", 2.5],
  ["Sniper rifle", 5.0],
  ["Submachine gun", 3.8],
];
const ammoForRangedWeaponsWithWeight = [
  ["9mm ammunition", 0.02],
  ["12-gauge shotgun shells", 0.05],
  ["5.56mm rifle cartridges", 0.03],
  ["Bolts for crossbow", 0.02],
  [".308 rifle bullets", 0.04],
  [".45 ACP ammunition", 0.02],
];
const postWarAloneMaleCharacterBackstories = [
  ", once a military operative, roams the desolate landscapes alone, haunted by memories of the war, seeking solace in isolation.",
  ", the brilliant inventor, scavenges alone for resources, driven by a relentless determination to rebuild technology and find purpose in the solitude.",
  ", the detective, wanders the ruins alone, driven by a personal quest for answers, grappling with the loneliness that echoes through the empty streets.",
  ", the seasoned explorer, becomes a lone wanderer, navigating the remnants of lost territories, finding solitude in the vast, silent expanses.",
  ", the skilled chef, adapts his culinary talents to create solitary meals from scarce resources, finding comfort in the routine of survival.",
  ", the reclusive artist, creates art in isolation, turning remnants of the past into personal symbols of resilience, finding solace in his creations.",
  ", the ambitious politician, faces the challenges of rebuilding society alone, striving to create order in a world that seems eerily empty.",
  ", the haunted paranormal investigator, confronts supernatural threats alone, seeking to understand and contain them, isolated from the safety of others.",
  ", the dedicated scientist, works alone to harness his knowledge in medicine and technology, providing solitary aid to those affected by the war's aftermath... If there are any.",
  ", the skilled swordsman, becomes a lone guardian, defending against threats, finding purpose in the solitary battle for survival.",
];
const postWarAloneFemaleCharacterBackstories = [
  ", the aspiring artist, wanders the desolate landscapes alone, sketching the remnants of a world that once thrived.",
  ", the detective with a mysterious past, navigates the ruins alone, driven by an unrelenting pursuit of justice in the silent aftermath.",
  ", the adventurous archaeologist, explores the deserted landscapes alone, unearthing remnants of lost civilizations in solitude.",
  ", the talented musician, wanders the empty streets alone, finding solace in the echoes of her melodies in the quiet ruins.",
  ", the tech genius, adapts her skills to survive alone, hacking into remnants of technology to navigate the post-apocalyptic world.",
  ", the passionate environmentalist, roams the desolate landscapes alone, fighting to protect the remnants of nature from further decay.",
  ", the skilled pilot, flies the empty skies alone, seeking signs of life in the vast, silent expanses left by the war.",
  ", the charismatic journalist, documents the remnants of the world alone, recording the silent stories left behind by a vanished civilization.",
  ", the time-travel researcher, navigates through different eras alone, seeking answers in the remnants of the past and future.",
  ", the resilient survivor, rebuilds her life alone, finding strength in solitude after overcoming the challenges of a shattered world.",
];
const wildlifeEnemiesDetails = {
  "Mutated Wolve": { health: 80, strength: 60, speed: 40 },
  "Radioactive Snake": { health: 50, strength: 40, speed: 70 },
  "Giant Insect": { health: 60, strength: 50, speed: 60 },
  "Venomous Spider": { health: 40, strength: 30, speed: 80 },
  "Feral Boar": { health: 90, strength: 70, speed: 30 },
  "Marauding Coyote": { health: 70, strength: 60, speed: 50 },
  "Rabid Bird of Prey": { health: 55, strength: 45, speed: 65 },
  "Toxic Frog": { health: 30, strength: 20, speed: 90 },
};
const sicknessTraitsWithDanger = [
  { sickness: "Fever", danger: 3 },
  { sickness: "Food Poisoning", danger: 2 },
  { sickness: "Dehydration", danger: 4 },
  { sickness: "Respiratory Infection", danger: 5 },
  { sickness: "Exhaustion", danger: 2 },
  { sickness: "Gastroenteritis", danger: 3 },
  { sickness: "Radiation Sickness", danger: 6 },
  { sickness: "Heat Stroke", danger: 4 },
  { sickness: "Hypothermia", danger: 4 },
  { sickness: "Parasitic Infection", danger: 5 },
];
const empty = "Empty";
console.log(postWarAloneMaleCharacterBackstories);

console.log(entertainmentItemsWithWeight);

console.log(survivalItemsWithWeight);

let randd = (hNumb) => {
  return Math.floor(Math.random() * hNumb);
};
// looking if there is a character
if (!localStorage.mainCharacterName) {
  let temp = randd(10);
  if (randd(2) == 1) {
    // Male character
    localStorage.mainCharacterName = britishMaleFirstNames[randd(10)];
    localStorage.mainCharacterGender = "Male";
    localStorage.picture =
      '<img src="../PICTURES/m' +
      Math.floor(1 + randd(2)) +
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
      Math.floor(1 + randd(1)) +
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

  localStorage.character00 = meleeWeaponsWithWeight[randd(6)][0];
  localStorage.character01 = empty;
  localStorage.character02 = empty;
  localStorage.character03 = empty;
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
}
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
};
characterInventorySet();
// this one restarts the game
let characterStatsDisplay = () => {
  $("#health").text("health: " + localStorage.health + "%");
  $("#hunger").text("health: " + localStorage.hunger + "%");
  $("#thirst").text("health: " + localStorage.thirst + "%");
};
characterStatsDisplay();

let storyDisplay = (storyString) => {
  $("#storyTeller").text(storyString);
};
storyDisplay(localStorage.mainCharacterAfterWar);
const restartt = () => {
  localStorage.removeItem("mainCharacterName");
  location.reload();
};
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
