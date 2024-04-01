// === Soundtrack Option ===

const soundtrackPlaylist = [
  "sounds/soundtrack/soundtrack-1.mp3",
  "sounds/soundtrack/soundtrack-2.mp3",
  "sounds/soundtrack/soundtrack-3.mp3",
];
let soundCounter = 0;
let soundtrackPlayer = new Audio(soundtrackPlaylist[soundCounter]);

function changeSoundtrack() {
  soundCounter++;
  if (soundCounter == 3) {
    soundCounter = 0;
  }

  soundtrackPlayer.src = soundtrackPlaylist[soundCounter];
  soundtrackPlayer.play();

  if (soundCounter == 2) {
    soundtrackPlayer.volume = 0.3;
  } else {
    soundtrackPlayer.volume = 0.5;
  }
}

soundtrackPlayer.addEventListener("ended", changeSoundtrack);

// Sound Button

const clickSound = new Audio("sounds/sound-effects/click.mp3");

function clickSoundFunction() {
  clickSound.pause();
  clickSound.currentTime = 0;
  clickSound.volume = 0.5;
  clickSound.play();
}

const soundButton = document.querySelector("#sound-button");
const soundButtonPath = document.querySelector("#sound-button svg path");
const svgOnSound =
  "M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM412.6 181.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z";
const svgOffSound =
  "M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z";

function changeSoundState() {
  clickSoundFunction();
  if (soundButtonPath.getAttribute("d") == svgOnSound) {
    soundButtonPath.setAttribute("d", svgOffSound);
    soundtrackPlayer.pause();
    soundButton.setAttribute("aria-label", "Ativar trilha sonora");
  } else {
    soundButtonPath.setAttribute("d", svgOnSound);
    soundtrackPlayer.play();
    soundButton.setAttribute("aria-label", "Desativar trilha sonora");
  }
}

soundButton.addEventListener("click", changeSoundState);

// === Home ===

const gameTitleText = "Terminal3";
const gameTitleElement = document.querySelector("#game-title");
let counter = 0;

function typeWriter() {
  if (counter < gameTitleText.length) {
    gameTitleElement.textContent += gameTitleText.charAt(counter); // Adiciona a caractere refereniada de gameTitleText
    if (gameTitleText.charAt(counter) == "3") {
      // Aplica estilo à caractere '3'
      gameTitleElement.innerHTML = "Terminal <span>3</span>";
    }
    counter++;
    setTimeout(typeWriter, 700); // Ajuste o tempo para controlar a velocidade de digitação
  }
}

const linkMenu = document.querySelectorAll(".link-menu");

const soudtrackSection = document.querySelector("#soundtrack-section");

function closeSoundtrackSection() {
  soudtrackSection.style.opacity = "0";
  setTimeout((soudtrackSection.style.visibility = "hidden"), 1000);
}

function enableLinksHome() {
  linkMenu.forEach((linkMenu) => {
    linkMenu.style.pointerEvents = "auto";
    linkMenu.style.cursor = "pointer";
  });
  soundButton.style.pointerEvents = "auto";
  soundButton.style.cursor = "pointer";
}

const header = document.querySelector("header");
const aside = document.querySelector("aside");

const soundtrackOptionOn = document.querySelector("#soundtrack-option-on");

soundtrackOptionOn.addEventListener("click", function () {
  clickSoundFunction();
  closeSoundtrackSection();
  soundButtonPath.setAttribute(
    "d",
    "M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM412.6 181.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z"
  );
  soundtrackPlayer.play();
  soundtrackPlayer.volume = 0.5;
  soundButton.setAttribute("aria-label", "Desativar trilha sonora");
  header.style.visibility = "visible";
  aside.style.visibility = "visible";
  setTimeout(typeWriter, 1500);
  setTimeout(function () {
    linkMenu[0].style.opacity = 1;
  }, 9200);
  setTimeout(function () {
    linkMenu[1].style.opacity = 1;
  }, 9500);
  setTimeout(function () {
    linkMenu[2].style.opacity = 1;
    enableLinksHome();
  }, 9800);
  setTimeout(function () {
    soundButton.style.opacity = "1";
  }, 10100);
});

const soundtrackOptionOff = document.querySelector("#soundtrack-option-off");

soundtrackOptionOff.addEventListener("click", function () {
  clickSoundFunction();
  closeSoundtrackSection();
  soundButtonPath.setAttribute(
    "d",
    "M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"
  );
  soundButton.setAttribute("aria-label", "Ativar trilha sonora");
  header.style.visibility = "visible";
  aside.style.visibility = "visible";
  setTimeout(typeWriter, 1500);
  setTimeout(function () {
    linkMenu[0].style.opacity = 1;
  }, 9200);
  setTimeout(function () {
    linkMenu[1].style.opacity = 1;
  }, 9500);
  setTimeout(function () {
    linkMenu[2].style.opacity = 1;
    enableLinksHome();
  }, 9800);
  setTimeout(function () {
    soundButton.style.opacity = "1";
  }, 10100);
});

// click sound for click in link menu
linkMenu.forEach((linkMenu) => {
  linkMenu.addEventListener("click", function () {
    clickSoundFunction();
  });
});

backButton = document.querySelectorAll(".back-button");

backButton.forEach((backButton) => {
  backButton.addEventListener("click", function () {
    clickSoundFunction();
  });
});

// === Credits page ===

credits = document.querySelector("#credits");
creditsLink = document.querySelector("#credits-link");
buttonBackCredits = document.querySelector("#back-button-credits");

function openCredits() {
  linkMenu.forEach((linkMenu) => {
    linkMenu.tabIndex = "-1";
  });
  header.setAttribute("aria-hidden", "true");
  credits.style.visibility = "visible";
  credits.style.opacity = "1";
}
creditsLink.addEventListener("click", openCredits);

function closeCredits() {
  linkMenu.forEach((linkMenu) => {
    linkMenu.tabIndex = "0";
  });
  header.setAttribute("aria-hidden", "false");
  credits.style.opacity = "0";
  setTimeout(function () {
    credits.style.visibility = "hidden";
  }, 500);
}
buttonBackCredits.addEventListener("click", closeCredits);

// === License page ===

const body = document.querySelector("body");

license = document.querySelector("#license");
licenseLink = document.querySelector("#license-link");
buttonBackLicense = document.querySelector("#back-button-license");

function openLicense() {
  linkMenu.forEach((linkMenu) => {
    linkMenu.tabIndex = "-1";
  });
  header.setAttribute("aria-hidden", "true");
  license.style.visibility = "visible";
  license.style.opacity = "1";
  body.style.overflowY = "visible";
}
licenseLink.addEventListener("click", openLicense);

function closeLicense() {
  linkMenu.forEach((linkMenu) => {
    linkMenu.tabIndex = "0";
  });
  header.setAttribute("aria-hidden", "false");
  license.style.opacity = "0";
  setTimeout(function () {
    license.style.visibility = "hidden";
  }, 500);
  body.style.overflowY = "hidden";
  window.scrollTo(0, 0);
}
buttonBackLicense.addEventListener("click", closeLicense);

// Game

const randomCharactersElement = document.querySelector("#game-content p span");
const randomCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let randomCharactersFinish = "";
let randomCharactersCounter = 0;
let randomChar;

// Generate random characters
function randomCharGenerator() {
  randomCharactersCounter++;
  randomChar = Math.floor(Math.random() * randomCharacters.length);
  if (randomChar == 36) {
    randomChar = 35;
  }
  if (randomCharactersCounter == 5) {
    randomCharactersFinish += "-";
  } else {
    randomCharactersFinish += randomCharacters.charAt(randomChar);
  }
  if (randomCharactersCounter != 9) {
    randomCharGenerator();
  } else {
    randomCharactersElement.setAttribute("aria-label", randomCharactersFinish);
  }
}

// Random Characters in element, using typing function
randomCharGenerator();

let typeRandomCharactersCounter = 0;

function typeRandomCharacters() {
  if (typeRandomCharactersCounter < randomCharactersFinish.length) {
    randomCharactersElement.textContent += randomCharactersFinish.charAt(
      typeRandomCharactersCounter
    );
    typeRandomCharactersCounter++;
    setTimeout(typeRandomCharacters, 900);
  }
}

// loading animation for click in play-link

const playLink = document.querySelector("#play-link");
const initialGamePage = document.querySelector("#initial-game-page");
const gamePage = document.querySelector("#game-page");

playLink.addEventListener("click", function () {
  initialGamePage.style.visibility = "visible";
  initialGamePage.style.opacity = "1";
  setTimeout(function () {
    header.style.visibility = "hidden";
    typeRandomCharacters();
  }, 1000);
  setTimeout(function () {
    initialGamePage.style.opacity = "0";
    initialGamePage.style.visibility = "hidden"
    gamePage.style.visibility = "visible"
    setTimeout(function() {
      gamePage.style.opacity = "1"
    }, 1500)
  }, 11000);
});
