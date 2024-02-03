function tocarSom(som) {
  document.querySelector(som).play();
}

const buttonList = document.querySelectorAll(".tecla");

for (let counter = 0; counter < buttonList.length; counter++) {
  const button = buttonList[counter];
  const instrumento = button.classList[1];

  const idAudio = `#som_${instrumento}`;

  button.onclick = function () {
    tocarSom(idAudio);
  };
}
