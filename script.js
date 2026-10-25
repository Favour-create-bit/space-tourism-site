const jsonString = `{
  "destinations": [
    {
      "name": "Moon",
      "images": {
        "png": "./assets/destination/image-moon.png",
        "webp": "./assets/destination/image-moon.webp"
      },
      "description": "See our planet as you’ve never seen it before. A perfect \\nrelaxing trip away to help regain perspective and come \\nback refreshed. While you’re there, take in some history \\nby visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    },
    {
      "name": "Mars",
      "images": {
        "png": "./assets/destination/image-mars.png",
        "webp": "./assets/destination/image-mars.webp"
      },
      "description": "Don’t forget to pack your hiking boots. You’ll need them \\nto tackle Olympus Mons, the tallest planetary mountain in \\nour solar system. It’s two and a half times the size of \\nEverest!",
      "distance": "225 mil. km",
      "travel": "9 months"
    },
    {
      "name": "Europa",
      "images": {
        "png": "./assets/destination/image-europa.png",
        "webp": "./assets/destination/image-europa.webp"
      },
      "description": "The smallest of the four Galilean moons orbiting Jupiter, \\nEuropa is a winter lover’s dream. With an icy surface, \\nit’s perfect for a bit of ice skating, curling, hockey, or \\nsimple relaxation in your snug wintery cabin.",
      "distance": "628 mil. km",
      "travel": "3 years"
    },
    {
      "name": "Titan",
      "images": {
        "png": "./assets/destination/image-titan.png",
        "webp": "./assets/destination/image-titan.webp"
      },
      "description": "The only moon known to have a dense atmosphere \\nother than Earth, Titan is a home away from home \\n(just a few hundred degrees colder!). As a bonus, \\nyou get striking views of the Rings of Saturn.",
      "distance": "1.6 bil. km",
      "travel": "7 years"
    }
  ],
  "crew": [
    {
      "name": "Douglas Hurley",
      "images": {
        "png": "./assets/crew/image-douglas-hurley.png",
        "webp": "./assets/crew/image-douglas-hurley.webp"
      },
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      "name": "Mark Shuttleworth",
      "images": {
        "png": "./assets/crew/image-mark-shuttleworth.png",
        "webp": "./assets/crew/image-mark-shuttleworth.webp"
      },
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      "name": "Victor Glover",
      "images": {
        "png": "./assets/crew/image-victor-glover.png",
        "webp": "./assets/crew/image-victor-glover.webp"
      },
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      "name": "Anousheh Ansari",
      "images": {
        "png": "./assets/crew/image-anousheh-ansari.png",
        "webp": "./assets/crew/image-anousheh-ansari.webp"
      },
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
  ],
  "technology": [
    {
      "name": "Launch vehicle",
      "images": {
        "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
        "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
      },
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "name": "Spaceport",
      "images": {
        "portrait": "./assets/technology/image-spaceport-portrait.jpg",
        "landscape": "./assets/technology/image-spaceport-landscape.jpg"
      },
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "name": "Space capsule",
      "images": {
        "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
        "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
      },
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]
}`
const jsObject = JSON.parse(jsonString);
const valuesArray = Object.values(jsObject);
console.log(valuesArray);
console.log(valuesArray[0][1].name);

const homeNav = document.getElementById("nav-home");
const destinationNav = document.getElementById("nav-destination");
const crewNav = document.getElementById("nav-crew");
const technologyNav = document.getElementById("nav-technology");
const hamburgerBtn = document.querySelector(".hamburger")
const bodyEl = document.querySelector("body")

homeNav.addEventListener("click", () => {
    homeNav.classList.add("active");
    destinationNav.classList.remove("active");
    crewNav.classList.remove("active");
    technologyNav.classList.remove("active");
});

destinationNav.addEventListener("click", () => {
    destinationNav.classList.add("active");
    homeNav.classList.remove("active");
    crewNav.classList.remove("active");
    technologyNav.classList.remove("active");
});

crewNav.addEventListener("click", () => {
    crewNav.classList.add("active");
    homeNav.classList.remove("active");
    destinationNav.classList.remove("active");
    technologyNav.classList.remove("active");
});

technologyNav.addEventListener("click", () => {
    technologyNav.classList.add("active");
    homeNav.classList.remove("active");
    destinationNav.classList.remove("active");
    crewNav.classList.remove("active");
});

const currentPage = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".navigation a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});


if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", () => {
        bodyEl.classList.toggle("menu-open");
    });
}



/*-----For destination page-----*/
if (document.getElementById("moon")) {
const moonBtn = document.getElementById("moon");
const marsBtn = document.getElementById("mars");
const europaBtn = document.getElementById("europa");
const titanBtn = document.getElementById("titan");
const destinationImage = document.getElementById("destination-img");
const destinationName = document.getElementById("destination-name");
const destinationText = document.getElementById("destination-text");
const destinationDistance = document.getElementById("destination-distance");
const destinationTravelTime = document.getElementById("destination-travel-time");

moonBtn.addEventListener("click", () => {
    moonBtn.classList.add("active");
    marsBtn.classList.remove("active");
    europaBtn.classList.remove("active");
    titanBtn.classList.remove("active");
  destinationImage.src = valuesArray[0][0].images.png;
  destinationName.textContent = valuesArray[0][0].name;
  destinationText.textContent = valuesArray[0][0].description;
  destinationDistance.textContent = valuesArray[0][0].distance.toUpperCase();
  destinationTravelTime.textContent = valuesArray[0][0].travel.toUpperCase();
});

marsBtn.addEventListener("click", () => {
    marsBtn.classList.add("active");
    moonBtn.classList.remove("active");
    europaBtn.classList.remove("active");
    titanBtn.classList.remove("active");
  destinationImage.src = valuesArray[0][1].images.png;
  destinationName.textContent = valuesArray[0][1].name;
  destinationText.textContent = valuesArray[0][1].description;
  destinationDistance.textContent = valuesArray[0][1].distance.toUpperCase();
  destinationTravelTime.textContent = valuesArray[0][1].travel.toUpperCase();
});

europaBtn.addEventListener("click", () => {
    europaBtn.classList.add("active");
    moonBtn.classList.remove("active");
    marsBtn.classList.remove("active");
    titanBtn.classList.remove("active");
  destinationImage.src = valuesArray[0][2].images.png;
  destinationName.textContent = valuesArray[0][2].name;
  destinationText.textContent = valuesArray[0][2].description;
  destinationDistance.textContent = valuesArray[0][2].distance.toUpperCase();
  destinationTravelTime.textContent = valuesArray[0][2].travel.toUpperCase();
});

titanBtn.addEventListener("click", () => {
    titanBtn.classList.add("active");
    moonBtn.classList.remove("active");
    marsBtn.classList.remove("active");
    europaBtn.classList.remove("active");
  destinationImage.src = valuesArray[0][3].images.png;
  destinationName.textContent = valuesArray[0][3].name;
  destinationText.textContent = valuesArray[0][3].description;
  destinationDistance.textContent = valuesArray[0][3].distance.toUpperCase();
  destinationTravelTime.textContent = valuesArray[0][3].travel.toUpperCase();
});
}
/*-----For crew page-----*/
if (document.getElementById("crew-name")) {
const crewOneBtn = document.getElementById("one");
const crewTwoBtn = document.getElementById("two");
const crewThreeBtn = document.getElementById("three");
const crewFourBtn = document.getElementById("four");
const crewImage = document.getElementById("crew-image");
const crewRole = document.getElementById("crew-role");
const crewName = document.getElementById("crew-name");
const crewSummary = document.getElementById("crew-bio");

crewOneBtn.addEventListener("click", () => {
  crewImage.src = valuesArray[1][0].images.png;
  crewRole.textContent = valuesArray[1][0].role.toUpperCase();
  crewName.textContent = valuesArray[1][0].name.toUpperCase();
  crewSummary.textContent = valuesArray[1][0].bio;
  crewOneBtn.classList.add("active-nav");
  crewTwoBtn.classList.remove("active-nav");
  crewThreeBtn.classList.remove("active-nav");
  crewFourBtn.classList.remove("active-nav");
});
crewTwoBtn.addEventListener("click", () => {
  crewImage.src = valuesArray[1][1].images.png;
  crewRole.textContent = valuesArray[1][1].role.toUpperCase();
  crewName.textContent = valuesArray[1][1].name.toUpperCase();
  crewSummary.textContent = valuesArray[1][1].bio;
  crewTwoBtn.classList.add("active-nav");
  crewOneBtn.classList.remove("active-nav");
  crewThreeBtn.classList.remove("active-nav");
  crewFourBtn.classList.remove("active-nav");
});
crewThreeBtn.addEventListener("click", () => {
  crewImage.src = valuesArray[1][2].images.png;
  crewRole.textContent = valuesArray[1][2].role.toUpperCase();
  crewName.textContent = valuesArray[1][2].name.toUpperCase();
  crewSummary.textContent = valuesArray[1][2].bio;
  crewThreeBtn.classList.add("active-nav");
  crewOneBtn.classList.remove("active-nav");
  crewTwoBtn.classList.remove("active-nav");
  crewFourBtn.classList.remove("active-nav");
});
crewFourBtn.addEventListener("click", () => {
  crewImage.src = valuesArray[1][3].images.png;
  crewRole.textContent = valuesArray[1][3].role.toUpperCase();
  crewName.textContent = valuesArray[1][3].name.toUpperCase();
  crewSummary.textContent = valuesArray[1][3].bio;
  crewFourBtn.classList.add("active-nav");
  crewOneBtn.classList.remove("active-nav");
  crewTwoBtn.classList.remove("active-nav");
  crewThreeBtn.classList.remove("active-nav");
});
};

/*-----For technology page-----*/
if (document.getElementById("tech-con")) {
  const terminologySelector = document.querySelectorAll(".selector");
  const terminologyDescription = document.getElementById("terminology-description");
  const terminologyName = document.getElementById("terminology-name");
  const technologyImage = document.getElementById("technology-image");


   for (let i = 0; i < terminologySelector.length; i++) {
    terminologySelector[i].addEventListener("click", () => {
      technologyImage.src = valuesArray[2][i].images.portrait;
      terminologyDescription.textContent = valuesArray[2][i].description;
      terminologyName.textContent = valuesArray[2][i].name.toUpperCase();
      terminologySelector.forEach(selector => {selector.classList.remove("active-tech")});
      terminologySelector[i].classList.add("active-tech");
      
    });
   }
  }