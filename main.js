function tocarSom(soundSelector) {
  const element = document.querySelector(soundSelector);
  if (element === null) {
    console.log("Elemento não encontrado");
  } else if (element.localName != "audio") {
    console.log("Elemento  inválido");
  } else {
    element.play();
  }
}

const buttonList = document.querySelectorAll(".tecla");

const teclas = ["q", "w", "e", "a", "s", "d", "f", "g", "h"];

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
