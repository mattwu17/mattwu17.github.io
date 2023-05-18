var education = {
  title: "Education",
  list: [
    {
      title: "College",
      descriptionTitle: "Univ. Maryland, College Park",
      descriptionDate: "Aug 19 - May 23",
      descriptionSubtitle: "B.S. Computer Science, Mechanical Engineering",
      descriptionLocation: "GPA: 3.94",
      description: [
        "Honors College",
        "Algorithms",
        "Databases",
        "Artificial Intelligence",
        "Computer Systems",
        "Object-Oriented Programming",
        "Mobile Development for iOS",
      ],
    },
    {
      title: "High School",
      descriptionTitle: "Thomas S. Wootton High School",
      descriptionDate: "Aug 15 - May 19",
      descriptionSubtitle: "GPA: 4.71, SAT: 1540, ACT: 35",
      descriptionLocation: "Rockville, MD",
      description: [
        "Led in Math Honors Society and Science National Honors Society to provide weekly tutoring in algebra, calculus, and physics",
        "Served as president of the Junior State of America and Film Appreciation clubs to lead bi-weekly afterschool meetings",
        "Participated in AMC 10/12, UM High School Math Competitions, and county math competitions as a member of the math team",
      ],
    },
  ],
};

var employment = {
  title: "Employment",
  list: [
    {
      title: "AWS",
      descriptionTitle: "Amazon Web Services",
      descriptionDate: "May 22 - Aug 22",
      descriptionSubtitle: "Software Development Engineering Intern",
      descriptionLocation: "Arlington, VA",
      description: [
        "Accelerated new client onboarding time from 4 hours to seconds by incorporating AWS Lambda, DynamoDB, S3, SNS, and API Gateway to collect, store, process, and distribute client data and whitelist new client access to cross-region APIs",
        "Developed an internal React web application with AWS Cognito authentication and authorization to house client onboarding tools",
        "Incorporated DynamoDB streams to capture table updates and audit changes to a separate DynamoDB table",
      ],
    },
    {
      title: "UMD CS",
      descriptionTitle: "UMD Dept. of Computer Science",
      descriptionDate: "Jan 22 - May 22",
      descriptionSubtitle: "Undergrad Teaching Assistant, Algorithms",
      descriptionLocation: "College Park, MD",
      description: [
        "Collaborated with professors and other teaching assistants to accurately deliver course materials and provide essential feedback",
        "Supported the undergraduate community through individual and group assistance during office hours for CMSC351 (Algorithms)",
      ],
    },
    {
      title: "ASML",
      descriptionTitle: "ASML",
      descriptionDate: "May 21 - Aug 21",
      descriptionSubtitle: "Reliability Engineering Intern (Remote)",
      descriptionLocation: "Wilton, CT",
      description: [
        "Maximized consistency in life data analysis by creating a centralized procedure document for gathering field data",
        "Evaluated life data using Weibull and other statistical lifetime distributions in Reliasoft to determine part reliability",
        "Consulted international collaborators and suppliers to obtain crucial reliability information and communicate reliability concerns for the Reticle Handler module of the EXE:5000 lithography machine",
      ],
    },
    {
      title: "UMD Engineering",
      descriptionTitle: "UMD School of Engineering",
      descriptionDate: "Jan 20 - Dec 20",
      descriptionSubtitle: "Keystone Tutor, Calculus III",
      descriptionLocation: "College Park, MD",
      description: [
        "Bolstered understanding of core mathematical concepts through one-on-one tutoring and office hours",
        "Guided weekly graded discussion sections of 60+ students for MATH241 (Calculus III)",
        "Smoothly transtioned tutoring to onine setting during COVID-19 pandemic and established an online meeting scheduling protocol",
      ],
    },
  ],
};

var skills = {
  title: "Skills",
  list: [
    {
      title: "Java",
    },
    {
      title: "AWS",
    },
    {
      title: "NodeJS",
    },
    {
      title: "Typescript",
    },
    {
      title: "React",
    },
    {
      title: "C",
    },
    {
      title: "Python",
    },
    {
      title: "OCaml",
    },
    {
      title: "Ruby",
    },
    {
      title: "MATLAB",
    },
  ],
};

var projects = {
  title: "Projects",
  list: [
    {
      title: "Portfolio Site",
      descriptionTitle: "Portfolio Website (this!)",
      descriptionDate: "Jan 23 - Feb 23",
      descriptionSubtitle: "Website to showcase personal info",
      descriptionLocation: "",
      description: [
        "Created a website using HTML, CSS, and JavaScript themed after the game Pokémon Ruby/Sapphire to showcase my personal and career info in a creative way",
        "Used Adobe Photoshop and other image editing tools to create and use image assets for the portfolio site",
        "Learned how to publically host websites on the internet (this part has not happened yet)",
      ],
    },
    {
      title: "Rubik's Cube Robot",
      descriptionTitle: "Rubik's Cube Solving Robot",
      descriptionDate: "Dec 20 - Dec 22",
      descriptionSubtitle: "A 3D printed robot that solves Rubik's cubes!",
      descriptionLocation: "",
      description: [
        "Developed and iterated upon a 3D-printed machine to detect and solve a Rubik's Cube",
        "Engineered a dynamic computer vision system in Python using a Raspberry Pi, OpenCV, USB cameras, and LED ring lights to identify colors on the cube in diverse lighting conditions and feed results into a solving algorithm",
        "Utilized serial communication between Raspberry Pi and Arduino Uno to control lighting conditions",
        "Appended IOT functionality and integrated Discord Webhooks to allow for wireless control and actuation of the robot",
        '<a href="https://github.com/mattwu17/Cube-Robot">Link to Github</a>',
      ],
    },
    {
      title: "Block Sorter",
      descriptionTitle: "Algoritmic Block Sorter Robot",
      descriptionDate: "Mar 22 - May 22",
      descriptionSubtitle: "Perform sorting algorithms on physical blocks",
      descriptionLocation: "",
      description: [
        "Engineered a mechatronic system using Arduino to measure and sort a linear array of variously sized, 3D printed blocks in ascending order by height using a variety of in-place sorting algorithms",
        "Created a pulley and rail system powered by a stepper motor to translate a servo motor gripper arm along the length of the blocks",
        "Designed a visual interface to communicate the height measurements and current positions of the blocks as they are sorted",
      ],
    },
    {
      title: "Register Bot",
      descriptionTitle: "Automatic Course Registration Bot",
      descriptionDate: "Aug 20",
      descriptionSubtitle: "Program to register for UMD classes online",
      descriptionLocation: "",
      description: [
        "Created a Java program using Selenium to fully automate class registration on the University of Maryland website",
        "Monitors open seats during website operating hours and refreshes until a successful registration is detected",
        "Successfully used to register for classes as soon as my registration block was lifted",
        "(I can't post the code because it violates university policy)",
      ],
    },
    {
      title: "Over-Sand Vehicle",
      descriptionTitle: "Over-Sand Vehicle",
      descriptionDate: "Jan 20 - May 20",
      descriptionSubtitle: "School Project to create an autonomous vehicle",
      descriptionLocation: "",
      description: [
        "Managed a team of 8 classmates as Team Leader to design an autonomous vehicle controlled by Arduino",
        "Delegated individual responsibilities between team members based on individual strengths and weaknesses",
        "Adapted to online environment and led team to remotely produce a Rube Goldberg machine",
      ],
    },
  ],
};

var activities = {
  title: "Activities",
  list: [
    {
      title: "TASA",
      descriptionTitle: "Taiwanese American",
      descriptionDate: "Sept 19 - May 23",
      descriptionSubtitle: "Student Association",
      descriptionLocation: "",
      description: [
        "Served as ITASA Representative, Night Market Director, and Senior Advisor on board for three years",
        "Headed a planning team of 40+ students to plan TASA's largest annual event, Night Market, in 2021",
        "Represented University of Maryland's TASA on the Intercollegiate Taiwanese American Student Association's board",
        "Formed connections with local Taiwanese organizations to provide social and professional networking opportunities for members",
      ],
    },
    {
      title: "Technica Hacks",
      descriptionTitle: "Technica Hacks",
      descriptionDate: "Apr 21 - Oct 22",
      descriptionSubtitle:
        "The largest hackathon for underrepresented genders!",
      descriptionLocation: "",
      description: [
        "Directed operations for Technica 2022, managing over 160,000 USD in event contracts and over 800 attendees",
        "Managed a seven-person team managing travel, venue, scheduling, legal, food, reimbursements, live stream, and other event logistics details",
        "Acquired, negotiated, and executed contracts for event space, transportation, and dining",
        "Collaborated with Women in Computing organizations from other east coast colleges to charter over 150 students to Technica via bus",
      ],
    },
    {
      title: "ITASA",
      descriptionTitle: "Intercollegiate Taiwanese ",
      descriptionDate: "Jul 21 - May 22",
      descriptionSubtitle: "American Student Association",
      descriptionLocation: "",
      description: [
        "Served as the representative for the University of Maryland, College Park's Taiwanese American Student Association on ITASA's National Board",
        "Communicated with other regional Taiwanese American Student Associations to organize inter-organizational events",
        "Facilitated travel logistics for UMCP TASA to attend ITASA's East Coast Conference in New Brunswick, NJ",
      ],
    },
    {
      title: "Honors SPC",
      descriptionTitle: "Honors Student",
      descriptionDate: "Aug 19 - May 21",
      descriptionSubtitle: "Planning Council",
      descriptionLocation: "",
      description: [
        "Served on the executive board of the Honors SPC to ideate and organize social events for UMD Honors College students",
        "Created engaging events to bond students across UMD's 7 different living learning programs",
        "Leveraged university food catering services to provide food and refreshments to students at events",
      ],
    },
  ],
};

let info = [education, employment, skills, projects, activities];
let bagImgs = [
  "images/bag1.png",
  "images/bag2.png",
  "images/bag3.png",
  "images/bag4.png",
  "images/bag5.png",
];
let bagDotImgs = [
  "images/15.png",
  "images/25.png",
  "images/35.png",
  "images/45.png",
  "images/55.png",
];
var currIdx = 0;

function handleInput(event) {
  if (event.key === "Escape") {
    playDing();
    window.location.href = "map.html";
  } else if (event.key === "a") {
    // add some noise
    playDing();
    rotateLeft();
  } else if (event.key === "d") {
    // add a lil sound
    playDing();
    rotateRight();
  }
}

function animateBag() {
  const bag = document.getElementById("bag-img");

  // change the bag image
  bag.src = bagImgs[currIdx];

  // makes the bag move around
  bag.classList.add("active-animation");
  setTimeout(function () {
    bag.classList.remove("active-animation");
  }, 200);
}

// shifts the menu rotation to the left
function rotateLeft() {
  // updates the current index in our info list
  currIdx = currIdx == 0 ? info.length - 1 : currIdx - 1;

  // just some lil animations
  animateBag();

  // update the name of the bag section
  const bagLabel = document.getElementById("bag-label");
  bagLabel.innerHTML = info[currIdx].title;

  // update the items of the bag section
  const bagItems = document.getElementById("bag-items");
  bagItems.innerHTML = "";

  for (let i = 0; i < info[currIdx].list.length; i++) {
    const newItem = document.createElement("li");
    newItem.innerHTML = info[currIdx].list[i].title.toUpperCase();
    // skills don't need a description!
    if (currIdx != 2) {
      newItem.onclick = function () {
        displayDescription(info[currIdx].list[i]);
      };
    }
    bagItems.appendChild(newItem);
  }

  // change the bagdots image
  const bagDots = document.getElementById("bag-dots");
  bagDots.src = bagDotImgs[currIdx];
}

// shifts the menu rotation to the right
function rotateRight() {
  // updates the current index in our info list
  currIdx = (currIdx + 1) % info.length;

  // animations or smth
  animateBag();

  // update the name of the bag section
  const bagLabel = document.getElementById("bag-label");
  bagLabel.innerHTML = info[currIdx].title;

  // update the items of the bag section
  const bagItems = document.getElementById("bag-items");
  bagItems.innerHTML = "";

  for (let i = 0; i < info[currIdx].list.length; i++) {
    const newItem = document.createElement("li");
    newItem.innerHTML = info[currIdx].list[i].title.toUpperCase();

    // skills don't need a description!
    if (currIdx != 2) {
      newItem.onclick = function () {
        displayDescription(info[currIdx].list[i]);
      };
    }

    bagItems.appendChild(newItem);
  }

  // change the bagdots image
  const bagDots = document.getElementById("bag-dots");
  bagDots.src = bagDotImgs[currIdx];
}

function displayDescription(self) {
  // play a lil noise
  playDing();

  // overrides existing input handling
  window.onkeydown = hideDescription;

  // get access to elements we need to show
  const largeTextBox = document.getElementById("large-text-box");
  const descriptionTitle = document.getElementById("description-title");
  const descriptionDate = document.getElementById("description-date");
  const descriptionSubtitle = document.getElementById("description-subtitle");
  const descriptionLocation = document.getElementById("description-location");
  const descriptionBulletList = document.getElementById(
    "description-bullet-list"
  );

  // remove existing inner html from elements
  descriptionTitle.innerHTML = "";
  descriptionDate.innerHTML = "";
  descriptionSubtitle.innerHTML = "";
  descriptionLocation.innerHTML = "";
  descriptionBulletList.innerHTML = "";

  // show the new elements
  largeTextBox.style.display = "block";
  descriptionTitle.style.display = "block";
  descriptionDate.style.display = "block";
  descriptionSubtitle.style.display = "block";
  descriptionLocation.style.display = "block";
  descriptionBulletList.style.display = "block";

  // display the relevant text to the description box
  descriptionTitle.innerHTML = self.descriptionTitle;
  descriptionDate.innerHTML = self.descriptionDate;
  descriptionSubtitle.innerHTML = self.descriptionSubtitle;
  descriptionLocation.innerHTML = self.descriptionLocation;

  for (let i = 0; i < self.description.length; i++) {
    const newItem = document.createElement("li");
    newItem.innerHTML = self.description[i];

    descriptionBulletList.appendChild(newItem);
  }
}

function hideDescription(event) {
  // only executes if the escape key is pressed
  if (event.key === "Escape") {
    // play a lil noise
    playDing();

    // returns function to handle keyboard inputs to normal
    window.onkeydown = handleInput;

    // get access to elements we need to hide
    const largeTextBox = document.getElementById("large-text-box");
    const descriptionTitle = document.getElementById("description-title");
    const descriptionDate = document.getElementById("description-date");
    const descriptionSubtitle = document.getElementById("description-subtitle");
    const descriptionLocation = document.getElementById("description-location");
    const descriptionBulletList = document.getElementById(
      "description-bullet-list"
    );

    // hide the elements
    largeTextBox.style.display = "none";
    descriptionTitle.style.display = "none";
    descriptionDate.style.display = "none";
    descriptionSubtitle.style.display = "none";
    descriptionLocation.style.display = "none";
    descriptionBulletList.style.display = "none";
  }
}

function playDing() {
  const ding = new Audio("audio/select.wav");
  ding.play();
}

function load() {
  currIdx = info.length - 1;
  rotateRight();
}

window.onload = load;
window.onkeydown = handleInput;
