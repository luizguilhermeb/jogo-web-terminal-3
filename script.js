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
    setTimeout(typeWriter, 500); // Ajuste o tempo para controlar a velocidade de digitação
  }
}

const linkMenu = document.querySelectorAll(".link-menu");

function enableLinks() {
  linkMenu.forEach((linkMenu) => {
    linkMenu.style.pointerEvents = "auto";
    linkMenu.style.cursor = "pointer";
  });
}

setTimeout(typeWriter, 1500);
setTimeout(enableLinks, 6000);

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
