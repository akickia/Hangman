// ------- VARIABLER ----------
//Lista random ord
const words = ["SKOLA", "HEMMA", "VISPGRÄDDE", "UKULELE", "FLAGGSTÅNG", "KLOCKA", "HUMOR" ]
//Tom lista för gissade bokstäver
let guessedLetters = []
//Bokstav i ord
let wordLetter
//Knapptryck
let keypress
//Antal felgissningar
let wrongAnswer = 0
//Antal rätta gissningar
let rightAnswer = 0
//Antal vinster
let wins = 0
//hämta element från html
let ulElement = document.querySelector(".word"); 
let noMatchElement = document.querySelector(".nomatch")

//Kalla på funktioner
generateRandomWord()
displayLetters()

//-------------------EVENTLISTENERS---------------------
//Lyssna efter tangenttryck
window.addEventListener("keypress", (event)=>{
  //konvertera knapptryck till versal
  keypress = event.key.toUpperCase()
  //Om bokstav inte är använd tidigare:
  if (!guessedLetters.includes(keypress)) {
    //lägg till i listan guessedLetters
    guessedLetters.push(keypress) 
    //kalla på funktioner
    displayGuessedLetters()
    compareLetters();
  }
})

//Vid game over - ladda om sidan
document.querySelector("a").addEventListener("click" , () => {
    location.reload() 
    })

//Vid vinst - fortsätt spelet genom funktionen resetGame
document.getElementById("reset").addEventListener("click" , () => {
  resetGame()  
    })
  

// ------- FUNKTIONER ----------
//Generera random ord
function generateRandomWord() {
  randomWord = words[(Math.floor(Math.random() * (words.length)))]
}

//Visa antal bokstäver
function displayLetters () {
  //För varje bokstav i ordet
  for (letter in randomWord) {
    //skapa li-element och ett p-element
    let newLiElement = document.createElement("li");
    let newParagraphElement = document.createElement("p");
    //låt wordletter = bokstaven
    wordLetter = randomWord[letter]
    //låt texten i p-elementet vara wordletter
    newParagraphElement.innerText = wordLetter;
    //lägg till i ul-elementet
    ulElement.appendChild(newLiElement)
    newLiElement.appendChild(newParagraphElement);
}}

//Jämför bokstäver och visa om rätt
function compareLetters() {
  //hämta p-elementet "word li p"
  let liElement = document.querySelectorAll(".word li p")
  //För varje bokstav i ordet
  for (letter in randomWord) {
    //Om bokstav övensstämmer med knapptryck
    if (randomWord[letter]=== keypress) {
      //Ändra display på bokstav så den syns
      liElement[letter].style.display="flex"
      //Lägg till poäng i variabel rightAnswer
      rightAnswer ++
      //If-sats för vinst
      if (rightAnswer == randomWord.length) {
        //Visa vinnar-sektion
        document.querySelector(".winner").style.display = "flex"
        document.querySelector(".winner p b").innerText = randomWord
    }}}
  //Kalla på funktion
  checkWordForLetter()
}

//Visa gissade bokstäver
function displayGuessedLetters () {
  //Skapa nytt li-element
  let newLiElement = document.createElement("li");
  //Sätt li till bokstaven användaren tryckt in
  newLiElement.innerText = keypress;
  //Lägg till li-element i ul-elementet "nomatch"
  noMatchElement.appendChild(newLiElement);
}

//Testa om bokstav finns, annars visa gubbe
function checkWordForLetter() {
  //Om bokstaven ej finns i ordet
  if (!randomWord.includes(keypress)) {
    //Lägg till 1 till variabeln wrongAnswer
    wrongAnswer++
    //Om wrongAnswer == x - lägg till klass för att visa del av gubbe
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
    //Om fel = 5 visa sektionen game-over
    if (wrongAnswer == 5) {
      document.querySelector('figure').classList.add('legs')
      document.querySelector(".game-over").style.display = "flex"
      //Visa vilket ord vi sökte
      document.querySelector(".game-over p b").innerText = randomWord
    }
  }
}

//Ta bort klasser från gubbe för att nollställa
function removeHangmanClasses() {
  document.querySelector('figure').classList.remove('arms')
  document.querySelector('figure').classList.remove('legs')
  document.querySelector('figure').classList.remove('body')
  document.querySelector('figure').classList.remove('scaffold')
  document.querySelector('figure').classList.remove('head')
}

//Reset allt som behövs för att starta om
function resetGame () {
  //Nollställ gissade bokstäver
  noMatchElement.innerHTML = ""
  //Nollställ visade bokstäver i randomordet
  ulElement.innerHTML = ""
  //Nollställ lista med gissade bokstäver
  guessedLetters = []
  //Ta bort klasser från gubbe
  removeHangmanClasses()
  //Visa antal vinster
  displayWins()
  //Visa inte vinnar-sektionen
  document.querySelector(".winner").style.display = "none"
  //Nollställ poäng
  rightAnswer = 0
  wrongAnswer = 0
  //Starta om funktioner
  generateRandomWord()
  displayLetters()
}

//Visa antal vinster
function displayWins() {
  //Öka poäng
  wins++
  //Visa poäng
  document.querySelector(".wins").textContent = wins
}
