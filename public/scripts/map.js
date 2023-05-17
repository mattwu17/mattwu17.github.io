let UNIT = 80;
let mapW = 3696;
let mapH = 3856;

var inMenu = false;
var charW = localStorage.getItem("charW")
  ? parseInt(localStorage.getItem("charW"))
  : 1848;
var charH = localStorage.getItem("charH")
  ? parseInt(localStorage.getItem("charH"))
  : 1968;

//variables to store recent motion for animation logic
var alternating = true;

// variables and constants used to track char position
// stores previous coordinates in local storage or uses default
var xCoord = localStorage.getItem("xCoord")
  ? parseInt(localStorage.getItem("xCoord"))
  : 14;
var yCoord = localStorage.getItem("yCoord")
  ? parseInt(localStorage.getItem("yCoord"))
  : 13;

const x = "x";
const o = "o";
const d = "d";
const s = "s";

const map = [
  [
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
  ],
  [
    x,
    x,
    x,
    o,
    x,
    d,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
  ],
  [
    x,
    x,
    x,
    o,
    o,
    o,
    o,
    o,
    o,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
  ],
  [
    x,
    x,
    x,
    o,
    o,
    o,
    o,
    o,
    o,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
  ],
  [
    x,
    x,
    x,
    o,
    o,
    o,
    o,
    o,
    x,
    x,
    x,
    x,
    x,
    x,
    d,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
  ],
  [
    x,
    x,
    x,
    o,
    o,
    o,
    o,
    s,
    x,
    x,
    x,
    o,
    o,
    o,
    o,
    o,
    x,
    x,
    o,
    o,
    o,
    o,
    o,
    x,
    x,
    x,
    x,
    x,
  ],
  [
    x,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    s,
    o,
    o,
    o,
    o,
    o,
    o,
    x,
    x,
    x,
    x,
    x,
  ],
  [
    x,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    x,
    x,
    x,
    x,
    x,
  ],
  [
    x,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    x,
    x,
    x,
    x,
    x,
  ],
  [
    x,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    x,
    x,
    x,
    x,
    o,
    o,
    o,
    o,
    o,
    x,
  ],
  [
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    x,
    x,
    x,
    x,
    o,
    o,
    o,
    o,
    o,
    x,
  ],
  [
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    x,
    x,
    x,
    x,
    o,
    o,
    o,
    o,
    o,
    x,
  ],
  [
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    o,
    o,
    o,
    o,
    s,
    o,
    x,
    d,
    x,
    x,
    o,
    o,
    o,
    o,
    o,
    x,
  ],
  [
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    x,
  ],
  [
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    x,
  ],
  [
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    d,
    x,
    x,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    x,
  ],
  [
    x,
    x,
    x,
    x,
    x,
    x,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
  ],
  [
    x,
    x,
    x,
    x,
    x,
    x,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
  ],
  [
    x,
    x,
    x,
    x,
    x,
    x,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    x,
    x,
    x,
    x,
    x,
    o,
    o,
    x,
    x,
    x,
    x,
  ],
  [
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    o,
    o,
    o,
    o,
    o,
    o,
    x,
    x,
    x,
    x,
    x,
    o,
    o,
    x,
    x,
    x,
    x,
  ],
  [
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    o,
    o,
    o,
    o,
    o,
    x,
    d,
    x,
    x,
    o,
    o,
    x,
    x,
    x,
    x,
  ],
  [
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    x,
    x,
    x,
    x,
  ],
  [
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    x,
    x,
    x,
    x,
  ],
  [
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    o,
    x,
    x,
    x,
  ],
  [
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
  ],
];

function playDing() {
  const ding = new Audio("../audio/select.wav");
  ding.play();
}

function handleInput(event) {
  if (event.key === "Enter") {
    playDing();
    showVerticalMenu();
  } else if (event.key === "w") {
    moveUp();
  } else if (event.key === "a") {
    moveLeft();
  } else if (event.key === "s") {
    moveDown();
  } else if (event.key === "d") {
    moveRight();
  }
}

function menuHandleInput(event) {
  if (event.key === "Escape") {
    hideVerticalMenu();
  }
}

function goToBag() {
  window.location.href = "../bag/index.html";
}

function goToPlayerCard() {
  window.location.href = "../card/index.html";
}

function goToLinkedIn() {
  window.location.href = "https://www.linkedin.com/in/matthew-wu-017/";
}

function goToGitHub() {
  window.location.href = "https://github.com/mattwu17";
}

function showVerticalMenu() {
  // change keydown behaviour
  window.onkeydown = menuHandleInput;

  const box = document.getElementById("vertical-menu-box");
  const list = document.getElementById("vertical-menu-list");

  // show the elements
  box.style.display = "block";
  list.style.display = "block";
}

function hideVerticalMenu() {
  // restore behavior on keydown
  window.onkeydown = handleInput;

  const box = document.getElementById("vertical-menu-box");
  const list = document.getElementById("vertical-menu-list");

  // hide the elements
  box.style.display = "none";
  list.style.display = "none";
}

function positionError() {
  const bump = new Audio("../audio/bump.wav");
  bump.play();
}

function door() {
  window.location.href = "https://linktr.ee/mattwu17";
}

function moveUp() {
  // set the character's appearance
  const char = document.getElementById("char");
  char.src = "../images/back1.png";

  // positioning logic
  var newY = yCoord - 1;

  if (map[newY][xCoord] == d) {
    door();
  } else if (map[newY][xCoord] != o) {
    positionError();
  } else {
    // update and store coordinate
    yCoord -= 1;
    localStorage.setItem("yCoord", yCoord.toString());

    // logic for animation type
    if (alternating) {
      up1();
    } else {
      up2();
    }
    alternating = !alternating;

    // reposition the map image
    var marginTop = document.getElementById("map").style.marginTop;
    var newMargin =
      parseInt(marginTop.substring(0, marginTop.length - 2)) + UNIT;
    document.getElementById("map").style.marginTop = newMargin + "px";
    charH -= UNIT;

    // store margin information
    localStorage.setItem("charH", charH.toString());
  }
}

function moveDown() {
  // set the character's appearance
  const char = document.getElementById("char");
  char.src = "../images/front1.png";

  // positioning logic
  var newY = yCoord + 1;

  if (map[newY][xCoord] == d) {
    door();
  } else if (map[newY][xCoord] != o) {
    positionError();
  } else {
    // update and store coordinate
    yCoord += 1;
    localStorage.setItem("yCoord", yCoord.toString());

    // logic for animation type
    if (alternating) {
      down1();
    } else {
      down2();
    }
    alternating = !alternating;

    // reposition the map image
    var marginTop = document.getElementById("map").style.marginTop;
    var newMargin =
      parseInt(marginTop.substring(0, marginTop.length - 2)) - UNIT;
    document.getElementById("map").style.marginTop = newMargin + "px";
    charH += UNIT;

    // store margin information
    localStorage.setItem("charH", charH.toString());
  }
}

function moveLeft() {
  // set the character's appearance
  const char = document.getElementById("char");
  char.src = "../images/left1.png";

  // positioning logic
  var newX = xCoord - 1;

  if (map[yCoord][newX] == d) {
    door();
  } else if (map[yCoord][newX] != o) {
    positionError();
  } else {
    // update and store coord
    xCoord -= 1;
    localStorage.setItem("xCoord", xCoord.toString());

    // logic for animation type
    if (alternating) {
      left1();
    } else {
      left2();
    }
    alternating = !alternating;

    // reposition the map image
    var marginLeft = document.getElementById("map").style.marginLeft;
    var newMargin =
      parseInt(marginLeft.substring(0, marginLeft.length - 2)) + UNIT;
    document.getElementById("map").style.marginLeft = newMargin + "px";
    charW -= UNIT;

    // store margin information
    localStorage.setItem("charW", charW.toString());
  }
}

function moveRight() {
  // set the character's appearance
  const char = document.getElementById("char");
  char.src = "../images/right1.png";

  // positioning logic
  var newX = xCoord + 1;

  if (map[yCoord][newX] == d) {
    door();
  } else if (map[yCoord][newX] != o) {
    positionError();
  } else {
    // update and store coord
    xCoord += 1;
    localStorage.setItem("xCoord", xCoord.toString());

    // logic for animation type
    if (alternating) {
      right1();
    } else {
      right2();
    }
    alternating = !alternating;

    // reposition the map image
    var marginLeft = document.getElementById("map").style.marginLeft;
    var newMargin =
      parseInt(marginLeft.substring(0, marginLeft.length - 2)) - UNIT;
    document.getElementById("map").style.marginLeft = newMargin + "px";
    charW += UNIT;

    // store margin information
    localStorage.setItem("charW", charW.toString());
  }
}

function up1() {
  const char = document.getElementById("char");
  char.src = "../images/back2.png";

  setTimeout(() => {
    char.src = "../images/back1.png";
  }, 50);
}

function up2() {
  const char = document.getElementById("char");
  char.src = "../images/back3.png";

  setTimeout(() => {
    char.src = "../images/back1.png";
  }, 50);
}

function left1() {
  const char = document.getElementById("char");
  char.src = "../images/left2.png";

  setTimeout(() => {
    char.src = "../images/left1.png";
  }, 50);
}

function left2() {
  const char = document.getElementById("char");
  char.src = "../images/left3.png";

  setTimeout(() => {
    char.src = "../images/left1.png";
  }, 50);
}

function down1() {
  const char = document.getElementById("char");
  char.src = "../images/front2.png";

  setTimeout(() => {
    char.src = "../images/front1.png";
  }, 50);
}

function down2() {
  const char = document.getElementById("char");
  char.src = "../images/front3.png";

  setTimeout(() => {
    char.src = "../images/front1.png";
  }, 50);
}

function right1() {
  const char = document.getElementById("char");
  char.src = "../images/right2.png";

  setTimeout(() => {
    char.src = "../images/right1.png";
  }, 50);
}

function right2() {
  const char = document.getElementById("char");
  char.src = "../images/right3.png";

  setTimeout(() => {
    char.src = "../images/right1.png";
  }, 50);
}

function adjustCharAndMap() {
  // keep the character centered
  var char = document.getElementById("char");
  char.style.marginLeft = window.innerWidth / 2 - 43 + "px";
  char.style.marginTop = window.innerHeight / 2 - 86 + "px";
  char.style.display = "block";

  // keep the map centered
  var w = window.innerWidth;
  var h = window.innerHeight;

  document.getElementById("map").style.marginLeft =
    charW * -1 + (w - UNIT) / 2 + "px";
  document.getElementById("map").style.marginTop =
    charH * -1 + (h - UNIT) / 2 + "px";
  document.getElementById("map").style.display = "block";
}

window.onload = adjustCharAndMap;
window.onresize = adjustCharAndMap;
window.onkeydown = handleInput;
