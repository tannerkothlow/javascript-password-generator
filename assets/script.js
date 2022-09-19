// Assignment Code
var generateBtn = document.querySelector("#generate");
//All passwords will at least use letters
var lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//Special characters will need to be set to true
var specialsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "=", "<", ">", "/", "?"]
//Numbers will also need to be set to true.
var numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

function generatePassword() {
  //Reset bigArray, bigArray would fill up with duplicates if declared outside of the function
  var bigArray = [lettersArray]
  //Enter all the var = prompt, make sure to check if password length is a number
  //Make sure to include a note to try inputting a wrong answer when I turn it in
  var passwordLength = prompt("Enter the length of your password. Must be between 8 and 128.", "20");
    while (isNaN(passwordLength)) {
      passwordLength = prompt("You need to enter a number! Enter a number between 8 and 128", "20");
    }
    while (passwordLength > 128) {
      passwordLength = prompt("That's too long! Enter a number under 128", "20");
    }
    while (passwordLength < 8) {
      passwordLength = prompt("That's too short! Enter a number that's equal to or greater than 8", "20");
    }

  var wantCapitals = confirm("Hit OK to include capital letters. Hit cancel to exclude them.");
  //Doesn't add to bigArray, instead will have a 50% chance of turning a letter capital.

  var wantSpecials = confirm("Hit OK to include special characters. Hit cancel to exclude them.");
  //If true, add specialsArray to the bigArray
    if (wantSpecials) {
      bigArray.push(specialsArray);
    }
  var wantNumbers = confirm("Hit OK to include numbers. Hit cancel to exclude them.")
  //If true, add numbersArray to bigArray
    if (wantNumbers) {
      bigArray.push(numbersArray);
    }

  console.log("bigArray check " + bigArray);

  var password = ""

  for (let i = 0; i <= passwordLength - 1; i++){
    //use bigarray length and such etc etc
    let chosenArray = bigArray[Math.floor(Math.random() * bigArray.length)];
    let chosenChara = chosenArray[Math.floor(Math.random() * chosenArray.length)];

      //Check if capitals are wanted, and if the chosen array is the letters one, and then does a 50% chance.
      if (wantCapitals === true && chosenArray === bigArray[0] && Math.floor(Math.random() * 2) === 0) {
        //Does not work if just chosenChara.toUpperCase(), must have it equal itself.
        chosenChara = chosenChara.toUpperCase();
        //console.log("capital check worked " + chosenChara);
      }
    password += chosenChara;
  }

  console.log("Password check " + password)
  console.log("Entered Password Length " + passwordLength);
  console.log("Capitals? " + wantCapitals);
  console.log("Specials? " + wantSpecials);
  console.log("Numbers? " + wantNumbers);
  console.log(bigArray);
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//TO DO: as bonus, make a tool tip on the bottom of the site that cycles through a few tips and trivia.

const tip1 = "There are about 4x10^37 possible combinations for a 20 digit password using this generator!"
const tip2 = "A high entropy (random string) 20 digit password would take over a billion years to guess using modern computers!"
const tip3 = "According to webtribunal.net, 24% of Americans use passwords like 'password1' and '123456'"
const tip4 = "Fun fact: I can only think of three fun password facts. Did you see the other three yet? I hope so."
const tipArray = [tip1, tip2, tip3, tip4];
var toolTip = document.querySelector("#tipBar");

//Sets to a random tip on load
toolTip.textContent = tipArray[Math.floor(Math.random() * tipArray.length)];
//On a timer, have the currentTip be changed. have currentTip pushed to the html as h3 in style.css style it as block with appropriate fonts and text
function toolTipUpdate () {

  let ticks = 0;

  var tipTimer = setInterval(function() {
    //As far as I know in order to have timers work they have to have an if else and ending parameter.
    if (ticks < 1000) {
    ticks++;
    //Can pick the same tip twice in a row but OH WELL, I'll fix that for extra credit later
    var currentTip = Math.floor(Math.random() * tipArray.length);
    //let currentTip = newTip;
    toolTip.textContent = tipArray[currentTip];
    } else {
      clearInterval(tipTimer);
    }

  }, 8000);
}

toolTipUpdate()


