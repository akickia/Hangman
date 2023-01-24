// ------- VARIABLER ----------
const words = ["SKOLA", "HEMMA", "VISPGRÄDDE", "UKULELE", "FLAGGSTÅNG", "KLOCKA", "HUMOR" ]
const guessedLetters = []
let wordLetter
let keypress
let ulElement = document.querySelector(".word"); 
let noMatchElement = document.querySelector(".nomatch")
let wrongAnswer = 0

//Kör funktioner
generateRandomWord()
displayLetters()

//Lyssna efter tangenttryck
window.addEventListener("keypress", (event)=>{
  keypress = event.key.toUpperCase()
  //Om bokstav inte är använd tidigare:
  if (!guessedLetters.includes(keypress)) {
    guessedLetters.push(keypress) 
    displayGuessedLetters()
    compareLetters();
  }
  console.log(guessedLetters)
})

// ------- FUNKTIONER ----------
//Generera random ord
function generateRandomWord() {
  randomWord = words[(Math.floor(Math.random() * (words.length)))]
  console.log(randomWord)
}

//Visa antal bokstäver
function displayLetters () {
  for (letter in randomWord) {
    wordLetter = randomWord[letter]
    let newLiElement = document.createElement("li");
    newLiElement.innerText = wordLetter;
    ulElement.appendChild(newLiElement);
}}

//Jämför bokstäver och visa om rätt
function compareLetters() {
  let liElement = document.querySelectorAll(".word li")
  for (letter in randomWord) {
    if (randomWord[letter]=== keypress) {
      liElement[letter].style.color="rgba(0,0,0,1)"
    }
}
  checkWordForLetter()
}

//Visa gissade bokstäver
function displayGuessedLetters () {
  let newLiElement = document.createElement("li");
  newLiElement.innerText = keypress;
  noMatchElement.appendChild(newLiElement);
}

// Fundera på hur vi kan dölja bokstäverna på annat sätt. 

//Testa om bokstav finns, annars visa gubbe
function checkWordForLetter() {
  if (!randomWord.includes(keypress)) {
    wrongAnswer++
    if (wrongAnswer == 1) {
      document.querySelector('figure').classList.add('scaffold')
    }
    if (wrongAnswer == 2) {
      document.querySelector('figure').classList.add('head')
    }
    if (wrongAnswer == 3) {
      document.querySelector('figure').classList.add('body')
    }
    if (wrongAnswer == 4) {
      document.querySelector('figure').classList.add('arms')
    }
    if (wrongAnswer == 5) {
      document.querySelector('figure').classList.add('legs')
      document.querySelector(".game-over").style.display = "flex"
      document.querySelector(".game-over p b").innerText = randomWord
    }
  }
}


//När hela ordet är ifyllt har man vunnit.
//Kunna starta om när man fått gameover


// VG
// - poängräknare