var education = {
  title: "Education",
  list: [
    {
      title: "College",
      description: "example value",
    },
    {
      title: "High School",
      description: "example value",
    },
  ],
};

var employment = {
  title: "Employment",
  list: [
    {
      title: "AWS",
      description: "example",
    },
    {
      title: "UMD CS",
      description: "ex",
    },
    {
      title: "ASML",
      description: "ex",
    },
    {
      title: "UMD ENGINEERING",
      description: "ex",
    },
  ],
};

var projects = {
  title: "Projects",
  list: [],
};

var info = [education, employment, projects];
var currIdx = 0;

function handleInput(event) {
  if (event.key === "Escape") {
    window.location.href = "index.html";
  } else if (event.key === "a") {
    rotateLeft();
  } else if (event.key === "d") {
    rotateRight();
  }
}

// shifts the menu rotation to the left
function rotateLeft() {
  currIdx = currIdx == 0 ? info.length - 1 : currIdx - 1;
  console.log("current idx: " + currIdx);

  // update the name of the bag section
  var baglabel = document.getElementById("baglabel");
  baglabel.innerHTML = info[currIdx].title;

  // update the items of the bag section
  var bagitems = document.getElementById("bagitems");
  bagitems.innerHTML = "";

  for (var i = 0; i < info[currIdx].list.length; i++) {
    const newItem = document.createElement("li");
    newItem.innerHTML = info[currIdx].list[i].title.toUpperCase();
    bagitems.appendChild(newItem);
  }
}

// shifts the menu rotation to the right
function rotateRight() {
  currIdx = (currIdx + 1) % info.length;
  console.log("current idx: " + currIdx);

  // update the name of the bag section
  var baglabel = document.getElementById("baglabel");
  baglabel.innerHTML = info[currIdx].title;

  // update the items of the bag section
  var bagitems = document.getElementById("bagitems");
  bagitems.innerHTML = "";

  for (var i = 0; i < info[currIdx].list.length; i++) {
    const newItem = document.createElement("li");
    newItem.innerHTML = info[currIdx].list[i].title.toUpperCase();
    bagitems.appendChild(newItem);
  }
}

window.onkeydown = handleInput;
