// === Soundtrack Option ===

const soudtrackSection = document.querySelector("#soundtrack-option");
const soundtrack = new Audio("sounds/soundtrack.mp3");

function soudtrackOn() {
  soundtrack.play();
  soundtrack.volume = 0.6;
}

function closeSoundtrackWindow() {
  soudtrackSection.style.opacity = "0";
  setTimeout((soudtrackSection.style.visibility = "hidden"), 1000);
}

soundtrackOptionOn = document.querySelector("#soundtrack-option-on");
soundtrackOptionOn.addEventListener("click", function () {
  soudtrackOn();
  closeSoundtrackWindow();
});

soundtrackOptionOff = document.querySelector("#soundtrack-option-off");
soundtrackOptionOff.addEventListener("click", function () {
  closeSoundtrackWindow();
});

// === texto-animation from home ===

const gameTitleText = "Terminal3";
const gameTitle = document.querySelector("#game-title");
let counter = 0;

function typeWriter() {
  if (counter < gameTitleText.length) {
    gameTitle.textContent += gameTitleText.charAt(counter); // Adiciona a caractere refereniada de gameTitleText
    if (gameTitleText.charAt(counter) == "3") {
      // Aplica estilo à caractere '3'
      gameTitle.innerHTML = "Terminal <span>3</span>";
    }
    counter++;
    setTimeout(typeWriter, 700); // Ajuste o tempo para controlar a velocidade de digitação
  }
}

const linkMenu = document.querySelectorAll(".link-menu");

function enableLinks() {
  linkMenu.forEach((linkMenu) => {
    linkMenu.style.pointerEvents = "auto";
    linkMenu.style.cursor = "pointer";
  });
}

soundtrackOptionOn.addEventListener("click", function (){
  setTimeout(typeWriter, 1500)
  setTimeout(function () {
    linkMenu[0].style.opacity = 1
  }, 9500)
  setTimeout(function () {
    linkMenu[1].style.opacity = 1
  }, 9800)
  setTimeout(function () {
    linkMenu[2].style.opacity = 1
    enableLinks()
  }, 10100)
});

soundtrackOptionOff.addEventListener("click", function (){
  setTimeout(typeWriter, 2000)
  setTimeout(function () {
    linkMenu[0].style.opacity = 1
  }, 9500)
  setTimeout(function () {
    linkMenu[1].style.opacity = 1
  }, 9800)
  setTimeout(function () {
    linkMenu[2].style.opacity = 1
    enableLinks()
  }, 10100)
});

// === Functions from credits page ===

credits = document.querySelector("#credits");
creditsLink = document.querySelector("#credits-link");
buttonBackCredits = document.querySelector("#back-button-credits");

function openCredits() {
  credits.style.visibility = "visible";
  credits.style.opacity = "1";
}
creditsLink.addEventListener("click", openCredits);

function closeCredits() {
  credits.style.opacity = "0";
  setTimeout(function () {
    credits.style.visibility = "hidden";
  }, 500);
}
buttonBackCredits.addEventListener("click", closeCredits);

// === Functions from license page ===

license = document.querySelector("#license");
licenseLink = document.querySelector("#license-link");
buttonBackLicense = document.querySelector("#back-button-license");

function openLicense() {
  license.style.visibility = "visible";
  license.style.opacity = "1";
}
licenseLink.addEventListener("click", openLicense);

function closeLicense() {
  license.style.opacity = "0";
  setTimeout(function () {
    license.style.visibility = "hidden";
  }, 500);
}
buttonBackLicense.addEventListener("click", closeLicense);
