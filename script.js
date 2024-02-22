const gameTitleText = "Terminal 3";
const gameTitle = document.querySelector("#game-title");
let contador = 0;

function typeWriter() {
  if (contador < gameTitleText.length) {
    gameTitle.textContent += gameTitleText.charAt(contador);
    if (gameTitleText.charAt(contador) == "3") {
      gameTitle.innerHTML = "Terminal <span>3</span>";
    }
    contador++;
    setTimeout(typeWriter, 500); // Ajuste o tempo para controlar a velocidade de digitação
  }
}

typeWriter();
