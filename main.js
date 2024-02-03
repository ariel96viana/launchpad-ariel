function tocarSom(soundSelector) {
  const element = document.querySelector(soundSelector);
  if (element && element.localName === "audio") {
    element.play();
  } else {
    console.log("Elemento ou seletor inválido");
  }
}

const buttonList = document.querySelectorAll(".tecla");

for (let counter = 0; counter < buttonList.length; counter++) {
  const button = buttonList[counter];
  const instrumento = button.classList[1];

  const idAudio = `#som_${instrumento}`;

  button.onclick = function () {
    tocarSom(idAudio);
  };

  button.onkeydown = function (event) {
    if (event.code === "Enter" || event.code === "Space") {
      button.classList.add("ativa");
    }
  };
  button.onkeyup = function () {
    button.classList.remove("ativa");
  };
}
