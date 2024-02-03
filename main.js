function tocarSom(som) {
  document.querySelector(som).play();
}

const buttonList = document.querySelectorAll(".tecla");

let contador = 0;

while (contador < buttonList.length) {
  const button = buttonList[contador];
  const instrumento = button.classList[1];

  const idAudio = `#som_${instrumento}`;

  button.onclick = function () {
    tocarSom(idAudio);
  };
  contador++;
}
