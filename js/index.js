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



window.addEventListener("keypress", (event)=>{
  keypress = event.key.toUpperCase()
  return keypress
})

compareLetters();

function compareLetters() {
  for (letter in randomWord) {
    wordLetter = randomWord[letter]
    console.log(randomWord[letter]);
    let newLiElement = document.createElement("li");
    let ulElement = document.querySelector(".word");
    newLiElement.innerText = wordLetter;
    ulElement.appendChild(newLiElement);
  if (wordLetter === keypress) {
    console.log("Hej");
  }
}
}

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