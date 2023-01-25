// ------- VARIABLER ----------
//Lista random ord
const words = ["SKOLA", "HEMMA", "VISPGRÄDDE", "UKULELE", "FLAGGSTÅNG", "KLOCKA", "HUMOR" ]
//Tom lista för gissade bokstäver
const guessedLetters = []
//Bokstav i ord
let wordLetter
//Knapptryck
let keypress
//Antal felgissningar
let wrongAnswer = 0

let rightAnswer = 0




//Kalla på funktioner
generateRandomWord()
displayLetters()

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

document.querySelectorAll("a").forEach((btn)  => {
  btn.addEventListener("click" , () => {
    location.reload() 
    })
  }
)

// ------- FUNKTIONER ----------
//Generera random ord
function generateRandomWord() {
  randomWord = words[(Math.floor(Math.random() * (words.length)))]
}

//Visa antal bokstäver
function displayLetters () {
  //hämta ul-elementet "word"
  let ulElement = document.querySelector(".word"); 
  //För varje bokstav i ordet
  for (letter in randomWord) {
    //skapa li-element
    let newLiElement = document.createElement("li");
    //låt wordletter = bokstaven
    wordLetter = randomWord[letter]
    //låt texten i li-elementet vara wordletter
    newLiElement.innerText = wordLetter;
    //lägg till listelementet i ul-elementet
    ulElement.appendChild(newLiElement);
}}

//Jämför bokstäver och visa om rätt
function compareLetters() {
  //hämta li-elementet "word li"
  let liElement = document.querySelectorAll(".word li")
  //För varje bokstav i ordet
  for (letter in randomWord) {
    //Om bokstav övensstämmer med knapptryck
    if (randomWord[letter]=== keypress) {
      //Ändra färg på bokstav så den syns
      liElement[letter].style.color="rgba(0,0,0,1)"
      rightAnswer ++
      if (rightAnswer == randomWord.length) {
        document.querySelector(".winner").style.display = "flex"
        document.querySelector(".winner p b").innerText = randomWord
    }
      console.log(rightAnswer);
    }
}
  //Kalla på funktion
  checkWordForLetter()
}

//Visa gissade bokstäver
function displayGuessedLetters () {
  //Hämta element
  let noMatchElement = document.querySelector(".nomatch")
  let newLiElement = document.createElement("li");
  //Sätt li till bokstaven användaren tryckt in
  newLiElement.innerText = keypress;
  //Lägg till li-element i ul-elementet "nomatch"
  noMatchElement.appendChild(newLiElement);
}

// Fundera på hur vi kan dölja bokstäverna på annat sätt. 


//Testa om bokstav finns, annars visa gubbe
function checkWordForLetter() {
  //Im bokstaven ej finns i ordet
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
console.log(randomWord.length);
//När hela ordet är ifyllt har man vunnit.
//Kunna starta om när man fått gameover


// VG
// - poängräknare