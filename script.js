// Letters A-Z
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Words + hint (correct word is first)
let words = {
    "A":["Apple","Ball","Cat","Dog"],
    "B":["Ball","Apple","Cat","Dog"],
    "C":["Cat","Dog","Apple","Ball"],
    "D":["Dog","Cat","Apple","Ball"],
    "E":["Elephant","Fish","Goat","Hat"],
    "F":["Fish","Elephant","Goat","Hat"],
    "G":["Goat","Elephant","Fish","Hat"],
    "H":["Hat","Elephant","Fish","Goat"],
    "I":["Ice","Juice","Key","Lion"],
    "J":["Juice","Ice","Key","Lion"],
    "K":["Key","Ice","Juice","Lion"],
    "L":["Lion","Ice","Key","Juice"],
    "M":["Monkey","Nest","Orange","Pig"],
    "N":["Nest","Monkey","Orange","Pig"],
    "O":["Orange","Monkey","Nest","Pig"],
    "P":["Pig","Monkey","Nest","Orange"],
    "Q":["Queen","Rat","Sun","Tiger"],
    "R":["Rat","Queen","Sun","Tiger"],
    "S":["Sun","Queen","Rat","Tiger"],
    "T":["Tiger","Queen","Sun","Rat"],
    "U":["Umbrella","Van","Watch","Xylophone"],
    "V":["Van","Umbrella","Watch","Xylophone"],
    "W":["Watch","Umbrella","Van","Xylophone"],
    "X":["Xylophone","Umbrella","Van","Watch"],
    "Y":["Yak","Zebra","Apple","Ball"],
    "Z":["Zebra","Yak","Apple","Ball"]
};

// Hint for each letter
let hints = {
    "A":"🍎 Apple",
    "B":"⚽ Ball",
    "C":"🐱 Cat",
    "D":"🐶 Dog",
    "E":"🐘 Elephant",
    "F":"🐟 Fish",
    "G":"🐐 Goat",
    "H":"🎩 Hat",
    "I":"🍨 Ice cream",
    "J":"🧃 Juice",
    "K":"🔑 Key",
    "L":"🦁 Lion",
    "M":"🐒 Monkey",
    "N":"🐦 Nest",
    "O":"🍊 Orange",
    "P":"🐷 Pig",
    "Q":"👑 Queen",
    "R":"🐀 Rat",
    "S":"☀️ Sun",
    "T":"🐯 Tiger",
    "U":"☂️ Umbrella",
    "V":"🚐 Van",
    "W":"⌚ Watch",
    "X":"🎼 Xylophone",
    "Y":"🐂 Yak",
    "Z":"🦓 Zebra"
};

// Score & level
let score = 0;
let currentLetterIndex = 0;

const letterEl = document.getElementById('letter');
const questionEl = document.getElementById('question');
const playSoundBtn = document.getElementById('playSound');
const hintEl = document.getElementById('hint');
const optionsEl = [
    document.getElementById('opt1'),
    document.getElementById('opt2'),
    document.getElementById('opt3'),
    document.getElementById('opt4')
];
const scoreEl = document.getElementById('score');
const levelEl = document.getElementById('level');
const progressEl = document.getElementById('progress');

// Load current letter
function loadLetter(){
    if(currentLetterIndex >= letters.length){
        alert(`🎉 You finished all letters! Your Score: ${score}`);
        return;
    }

    let letter = letters[currentLetterIndex];
    letterEl.textContent = letter;
    questionEl.textContent = `Select the correct word for letter ${letter}`;
    hintEl.textContent = `Hint: ${hints[letter]}`;

    // Update level
    if(currentLetterIndex < 8) levelEl.textContent = "Level: 1";
    else if(currentLetterIndex < 16) levelEl.textContent = "Level: 2";
    else levelEl.textContent = "Level: 3";

    // Update progress bar
    progressEl.style.width = ((currentLetterIndex/letters.length)*100)+"%";

    // Load options
    words[letter].forEach((word,i)=>{
        optionsEl[i].textContent = word;
        optionsEl[i].onclick = ()=> checkAnswer(word, letter);
    });
}

// Check answer
function checkAnswer(selected, letter){
    if(selected === words[letter][0]){
        alert("✅ Correct!");
        score += 10;
    } else {
        alert("❌ Try Again!");
        score -= 2;
    }
    scoreEl.textContent = `Score: ${score}`;
    currentLetterIndex++;
    loadLetter();
}

// Play pronunciation
playSoundBtn.addEventListener('click', ()=>{
    let msg = new SpeechSynthesisUtterance(letters[currentLetterIndex]);
    window.speechSynthesis.speak(msg);
});

// Initial load
loadLetter();
