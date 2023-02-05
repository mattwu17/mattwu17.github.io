let UNIT = 80;
let mapW = 3696;
let mapH = 3856;

var inMenu = false;
var charW = 1848;
var charH = 1968;

function spawnChar() {
  var char = document.getElementById("char");
  char.style.marginLeft = window.innerWidth / 2 - 43 + "px";
  char.style.marginTop = window.innerHeight / 2 - 73 + "px";

  resizeBackground();
}

function handleInput(event) {
  if (event.key === "Enter") {
    window.location.href = "bag.html";
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

function moveUp() {
  var marginTop = document.getElementById("map").style.marginTop;
  var newMargin = parseInt(marginTop.substring(0, marginTop.length - 2)) + UNIT;
  document.getElementById("map").style.marginTop = newMargin + "px";
  charH -= UNIT;
}

function moveDown() {
  var marginTop = document.getElementById("map").style.marginTop;
  var newMargin = parseInt(marginTop.substring(0, marginTop.length - 2)) - UNIT;
  document.getElementById("map").style.marginTop = newMargin + "px";
  charH += UNIT;
}

function moveLeft() {
  var marginLeft = document.getElementById("map").style.marginLeft;
  var newMargin =
    parseInt(marginLeft.substring(0, marginLeft.length - 2)) + UNIT;
  document.getElementById("map").style.marginLeft = newMargin + "px";
  charW -= UNIT;
}

function moveRight() {
  var marginLeft = document.getElementById("map").style.marginLeft;
  var newMargin =
    parseInt(marginLeft.substring(0, marginLeft.length - 2)) - UNIT;
  document.getElementById("map").style.marginLeft = newMargin + "px";
  charW += UNIT;
}

function resizeBackground() {
  var w = window.innerWidth;
  var h = window.innerHeight;

  document.getElementById("map").style.marginLeft =
    charW * -1 + (w - UNIT) / 2 + "px";
  document.getElementById("map").style.marginTop =
    charH * -1 + (h - UNIT) / 2 + "px";
  console.log("test");
}

window.onload = spawnChar;
window.onresize = spawnChar;
window.onkeydown = handleInput;
