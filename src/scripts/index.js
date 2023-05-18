var second = false;

function loadWorld(event) {
  // proceed if the user presses enter
  if (event.key === "Enter" && !second) {
    // fade out title page
    const mainImg = document.getElementById("main-img");
    const instructions = document.getElementById("instructions");

    instructions.style.display = "none";
    mainImg.style.opacity = "0";

    setTimeout(() => {
      mainImg.src = "images/title.png";
      mainImg.style.opacity = 1;
      instructions.style.display = "block";
      second = true;
    }, 2500);
  } else if (second) {
    window.location.href = "map/index.html";
  }
}

window.onkeydown = loadWorld;
