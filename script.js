// === Soundtrack Option ===

const soudtrackSection = document.querySelector("#soundtrack-option");
const soundtrackPlaylist = [
  "sounds/soundtrack/soundtrack-1.mp3",
  "sounds/soundtrack/soundtrack-2.mp3",
  "sounds/soundtrack/soundtrack-3.mp3",
];
let soundCounter = 0;
let soundtrackPlayer = new Audio(soundtrackPlaylist[soundCounter]);

function soudtrackOn() {
  soundtrackPlayer.play();
  soundtrackPlayer.volume = 0.5;
}

soundtrackPlayer.addEventListener("ended", function () {
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
});

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

// === Home ===

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
const menu = document.querySelector("#menu");
const clickSound = new Audio("sounds/sound-effects/click.mp3");

// click sound for mouseover
linkMenu.forEach((linkMenu) => {
  linkMenu.addEventListener("mouseover", function () {
    clickSound.volume = 0.5;
    clickSound.pause();
    clickSound.currentTime = 0;
    clickSound.play();
  });
});

function enableLinks() {
  linkMenu.forEach((linkMenu) => {
    linkMenu.style.pointerEvents = "auto";
    linkMenu.style.cursor = "pointer";
  });
}

const header = document.querySelector('header')

soundtrackOptionOn.addEventListener("click", function () {
  linkMenu.forEach((linkMenu) => {
    linkMenu.tabIndex = "0";
  });
  header.ariaHidden = 'false';
  setTimeout(typeWriter, 1500);
  setTimeout(function () {
    linkMenu[0].style.opacity = 1;
  }, 9500);
  setTimeout(function () {
    linkMenu[1].style.opacity = 1;
  }, 9800);
  setTimeout(function () {
    linkMenu[2].style.opacity = 1;
    enableLinks();
  }, 10100);
});

soundtrackOptionOff.addEventListener("click", function () {
  linkMenu.forEach((linkMenu) => {
    linkMenu.tabIndex = "0";
  });
  header.ariaHidden = 'false';
  setTimeout(typeWriter, 2000);
  setTimeout(function () {
    linkMenu[0].style.opacity = 1;
  }, 9200);
  setTimeout(function () {
    linkMenu[1].style.opacity = 1;
  }, 9500);
  setTimeout(function () {
    linkMenu[2].style.opacity = 1;
    enableLinks();
  }, 9800);
});

// === Credits page ===

backButton = document.querySelectorAll(".back-button");

backButton.forEach((backButton) => {
  backButton.addEventListener("mouseover", function () {
    clickSound.play();
  });
});

credits = document.querySelector("#credits");
creditsLink = document.querySelector("#credits-link");
buttonBackCredits = document.querySelector("#back-button-credits");

function openCredits() {
  linkMenu.forEach((linkMenu) => {
    linkMenu.tabIndex = "-1";
  });
  header.ariaHidden = 'true';
  credits.style.visibility = "visible";
  credits.style.opacity = "1";
}
creditsLink.addEventListener("click", openCredits);

function closeCredits() {
  linkMenu.forEach((linkMenu) => {
    linkMenu.tabIndex = "0";
  });
  header.ariaHidden = 'false';
  credits.style.opacity = "0";
  setTimeout(function () {
    credits.style.visibility = "hidden";
  }, 500);
}
buttonBackCredits.addEventListener("click", closeCredits);

// === License page ===

license = document.querySelector("#license");
licenseLink = document.querySelector("#license-link");
buttonBackLicense = document.querySelector("#back-button-license");

function openLicense() {
  linkMenu.forEach((linkMenu) => {
    linkMenu.tabIndex = "-1";
  });
  header.ariaHidden = 'true';
  license.style.visibility = "visible";
  license.style.opacity = "1";
}
licenseLink.addEventListener("click", openLicense);

function closeLicense() {
  linkMenu.forEach((linkMenu) => {
    linkMenu.tabIndex = "0";
  });
  header.ariaHidden = 'false';
  license.style.opacity = "0";
  setTimeout(function () {
    license.style.visibility = "hidden";
  }, 500);
}
buttonBackLicense.addEventListener("click", closeLicense);
