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

setTimeout(typeWriter, 2000);
