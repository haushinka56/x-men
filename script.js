const characters = document.querySelectorAll(".character");

characters.forEach((character) => {
  character.addEventListener("mouseenter", () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    removeCharacterSelection();

    addCharacterSelection(character);

    changeSelectedCharacterImage(character);

    changeSelectedCharacterName(character);

    changeSelectedCharacterDescription(character);
  });
});

function removeCharacterSelection() {
  const selectedCharacter = document.querySelector(".selected");
  selectedCharacter.classList.remove("selected");
}

function addCharacterSelection(character) {
  character.classList.add("selected");
}

function changeSelectedCharacterImage(character) {
  const selectedCharacterImage = document.querySelector(".character-png");
  const characterID = character.attributes.id.value;

  selectedCharacterImage.src = `./src/images/card-${characterID}.png`;
}

function changeSelectedCharacterName(character) {
  const characterName = document.getElementById("character-name");

  characterName.innerText = character.getAttribute("data-name");
}

function changeSelectedCharacterDescription(character) {
  const characterDescription = document.getElementById("character-description");

  characterDescription.innerText = character.getAttribute("data-description");
}
