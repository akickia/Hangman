/**
 För att toggla SVG:en
 document.querySelector('figure').classList.add('scaffold')
 document.querySelector('figure').classList.add('head')
 document.querySelector('figure').classList.add('body')
 document.querySelector('figure').classList.add('arms')
 document.querySelector('figure').classList.add('legs')
 */

//1. Lista med alfabetet
//    Skapa hårdkodad lista med alfabetets bokstäver - OK 
const alphabeth = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U",
      "V", "X", "Y", "Z", "Å", "Ä", "Ö"]

// 2. Lista med gissade bokstäver - OK
//    Skapa tom lista. 
const guessedLetters = []

// 3. Skapa lista med ord. 
//    Skapa hårdkodad lista med ord. 
const words = ["SKOLA", "HEMMA", "VISPGRÄDDE", "UKULELE", "FLAGGSTÅNG", "KLOCKA", "HUMOR" ]

// 4. Skapa funktion för att slumpa ut random ord - OK
//    Slumpa random ord från ordlista. 

function generateRandomWord() {
  randomWord = words[(Math.floor(Math.random() * (words.length)))]
  console.log(randomWord)
}

generateRandomWord()

// 5. Visa antal bokstäver på sidan
//    Lägg till ordet på sidan uppdelat per bokstav genom en loop.
// document.querySelector(".word").innerHTML = `<li>${randomWord}</li>`
//    Dölj bokstäverna med opacity. 
//    Lägg till box(eller liknande) för varje bokstav för att 
//    visa hur många bokstäver ordet innehåller. 

// 6. Lägg till input där användaren kan skriva in bokstav.
//    Koppla value från input till en variabel (så vi kan jämföra)

let wordLetter
let keypress
let ulElement = document.querySelector(".word"); 



window.addEventListener("keypress", (event)=>{
  keypress = event.key.toUpperCase()
  compareLetters();
})

displayLetters()
let liElement = document.querySelectorAll(".word li")
function compareLetters() {
  for (letter in randomWord) {
  
    if (randomWord[letter]=== keypress) {
      for (let i = 0; i<randomWord.length; i++) {
        console.log("hejsan");
      }
      liElement[letter].style.color="rgba(0,0,0,1)"
    }
}
  checkWordForLetter()
}

function checkWordForLetter() {
  if (randomWord.includes(keypress)) {
    console.log("Display bokstav")
  }
  else {
    console.log("display gubbe")
  }
}

// let example = "Example String!";
// let ourSubstring = "Example";

// if (example.includes(ourSubstring)) {
// 	console.log("The word Example is in the string.");
// } else {
// 	console.log("The word Example is not in the string.");
// }


function displayLetters () {
  for (letter in randomWord) {
    wordLetter = randomWord[letter]
    let newLiElement = document.createElement("li");
 
    newLiElement.innerText = wordLetter;
    ulElement.appendChild(newLiElement);
}}



// 7. För varje gissad bokstav: 
//    Om gissad bokstav finns i ordet - visa bokstav. 
//    Else visa ett element i svg (gubben)
//    Lägg till gissad bokstav i listan för gissade bokstäver
//    Visa på sidan listan med gissade bokstäver. 

// 8. Om alla delar på gubben är visade = Game over (Visa game-over-box)
//    Starta-om-knapp = reload sida. 

// 9. Om alla bokstäver är hittade = Vinst (Skapa element för detta)


// VG
// - poängräknare