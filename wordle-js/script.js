const inputLetters = document.getElementsByClassName("letter-box");
const kbLetters = document.getElementsByClassName("kb-letter");
const randomWordList = [
  "OLIWA", "TRAWA", "ELITA", "TEMAT",
  "TOSTY", "JAJKO", "CZAPA", "KUBEK",
  "LAMPA", "DESKA", "BATON", "SZAFA"
];
let randomWord = randomWordList[Math.floor(Math.random() * randomWordList.length)];
console.log("password: " + randomWord);

let pointer = 0;
let wordLength = 5;
let row = 1;
let index;
let userWord = "";
let overlayBox;

window.onload = function () {
  Array.from(kbLetters).forEach((element) => {
    element.addEventListener("mousedown", () => {
      // normal letter
      if (element.textContent.length == 1) {
        inputLetter(element);
      }
      // enter
      else if (element.textContent == "ENTER") {
        checkWordNeeds();
      }
      // backspace
      else {
        deleteLetter();
      }
    });
  });
};

function inputLetter(element) {
  index = pointer % (wordLength * row);
  // if index points at last letter in word
  // then don't change last letter
  if (pointer == wordLength * row) {
    return;
  }
  // enter a letter
  inputLetters[index].innerHTML = element.textContent;
  pointer++;
}

function checkWordNeeds() {
  // enter a word only when it has 5 letters
  if (pointer == wordLength * row) {
    for (let i = pointer - 5; i < pointer; i++) {
      userWord += inputLetters[i].innerHTML;
    }
    // check if letter is not in word
    for (let j = 0; j < randomWord.length; j++) {
      if (!randomWord.includes(inputLetters[j + (row - 1) * randomWord.length].innerHTML)) {
        continue;
      }
      // i don't know how but it's working
      // i was in trance
      // if letter is on good place
      if (inputLetters[j + (row - 1) * randomWord.length].innerHTML == randomWord[j]) {
        inputLetters[j + (row - 1) * randomWord.length].classList.add("on-good-place");
        continue;
      }
      // letter is in word
      inputLetters[j + (row - 1) * randomWord.length].classList.add("is-in-word");
    }
    console.log("user word: " + userWord);

    row++;
    isWordCorrectness();
    userWord = "";
    if (pointer == 30) {
      showLoseOverlay();
    }
    return;
  }
  console.log("too little letters");
}

function isWordCorrectness() {
  if (userWord == randomWord) {
    showWinOverlay();
  }
}

function showWinOverlay() {
  document.getElementById("overlay").style.display = "flex";
  overlayBox = document.getElementById("overlay-win-box");
  overlayBox.innerHTML = "WIN!!<button class =\"btn\" onclick=\"hideOverlay()\">Play again</button>";
  overlayBox.style.display = "flex";
}

function showLoseOverlay() {
  document.getElementById("overlay").style.display = "flex";
  overlayBox = document.getElementById("overlay-lose-box");
  overlayBox.innerHTML = "LOSE :((<button class =\"btn\" onclick=\"hideOverlay()\">Play again</button>";
  overlayBox.style.display = "flex";
}

function hideOverlay() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("overlay-win-box").style.display = "none";
  document.getElementById("overlay-lose-box").style.display = "none";
  resetGame();
}

function resetGame() {
  pointer = 0;
  wordLength = 5;
  row = 1;
  userWord = "";
  randomWord = randomWordList[Math.floor(Math.random() * randomWordList.length)];
  console.log("random word: " + randomWord)
  Array.from(inputLetters).forEach((element) => {
    element.innerHTML = "";
    element.classList.remove("on-good-place");
    element.classList.remove("is-in-word");
  });
  console.log("reseted");
}

function deleteLetter() {
  // pointer can't be samller than 0
  if (pointer == 0) {
    return;
  }
  // delete letter only in last word
  if (pointer > (row - 1) * wordLength) {
    pointer--;
  }
  inputLetters[pointer].innerHTML = "";
}
