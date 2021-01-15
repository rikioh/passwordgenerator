// Button for the function
var randomizeE1 = document.querySelector("#prompt");

// random string variable for the password
var randomString = "";

// create an array for lowercase letters
var lowCharacters = Array.from('abcdefghijklmnopqrstuvwxyz')
// create an array for uppercase letters
var upCharacters = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
// create an array for special characters
var specCharacters = Array.from('!"#$%&()*+,-./:;<=>?@[]^_`{|}~')
// create an array for numbers
var numCharacters = Array.from('1234567890')

// Event listener for the generate button to function on a mouse click as well as specifying the entire function for the randomizer
randomizeE1.addEventListener ("click", function selectCriteria() {

// Prompt for password length (8-128)
var passLength = prompt("Please enter a passcode length (between 8-128)")
// Validate that the item entered is numerical
while(isNaN(passLength) || passLength < 8 || passLength > 128){
    var passLength = prompt("Please enter a passcode length (between 8-128)")
}

// Prompts for password criteria general
var passlowCriteria = confirm("Select ok if you wish to include lowercase letters in your passcode")
var passupCriteria = confirm("Select ok if you wish to include uppercase letters in your passcode")
var passnumCriteria = confirm("Select ok if you wish to include numbers in your passcode")
var passspecCriteria = confirm("Select ok if you wish to include special characters in your passcode")

// Validation that at least one item was selected
while (passlowCriteria!==true && passupCriteria!==true && passnumCriteria!==true && passspecCriteria!==true){
    alert("You must select confirm for at least one criteria")
    var passlowCriteria = confirm("Select ok if you wish to include lowercase letters in your passcode")
    var passupCriteria = confirm("Select ok if you wish to include uppercase letters in your passcode")
    var passnumCriteria = confirm("Select ok if you wish to include numbers in your passcode")
    var passspecCriteria = confirm("Select ok if you wish to include special characters in your passcode")
}

//All combinations of password criteria
    
if (passlowCriteria!==false && passupCriteria!==true && passnumCriteria!==true && passspecCriteria!==true){
    // create lowercase only criteria
    var arrayCombo = lowCharacters
}
else if (passlowCriteria!==true && passupCriteria!==false && passnumCriteria!==true && passspecCriteria!==true){
    // create uppercase only
    var arrayCombo = upCharacters
}
else if (passlowCriteria!==true && passupCriteria!==true && passnumCriteria!==false && passspecCriteria!==true){
    // create number only
    var arrayCombo = numCharacters
}
else if (passlowCriteria!==true && passupCriteria!==true && passnumCriteria!==true && passspecCriteria!==false){
    // create special only
    var arrayCombo = specCharacters
}
else if (passlowCriteria!==false && passupCriteria!==false && passnumCriteria!==true && passspecCriteria!==true){
    // create lowercase and uppercase criteria
    var arrayCombo = lowCharacters.concat(upCharacters)
}
else if (passlowCriteria!==false && passupCriteria!==true && passnumCriteria!==false && passspecCriteria!==true){
    // create lowercase and number criteria
    var arrayCombo = lowCharacters.concat(numCharacters)
}
else if (passlowCriteria!==false && passupCriteria!==true && passnumCriteria!==true && passspecCriteria!==false){
    // create lowercase and special criteria
    var arrayCombo = lowCharacters.concat(specCharacters)
}
else if (passlowCriteria!==true && passupCriteria!==false && passnumCriteria!==false && passspecCriteria!==true){
    // create uppercase and num criteria
    var arrayCombo = upCharacters.concat(numCharacters)
}
else if (passlowCriteria!==true && passupCriteria!==false && passnumCriteria!==true && passspecCriteria!==false){
    // create uppercase and special criteria
    var arrayCombo = upCharacters.concat(specCharacters)
}
else if (passlowCriteria!==true && passupCriteria!==true && passnumCriteria!==false && passspecCriteria!==false){
    // create num and special criteria
    var arrayCombo = numCharacters.concat(specCharacters)
}
else if (passlowCriteria!==false && passupCriteria!==false && passnumCriteria!==false && passspecCriteria!==true){
    // create lowercase and uppercase and num criteria
    var arrayCombo = lowCharacters.concat(upCharacters, numCharacters)
}
else if (passlowCriteria!==false && passupCriteria!==false && passnumCriteria!==true && passspecCriteria!==false){
    // create lowercase and uppercase and special criteria
    var arrayCombo = lowCharacters.concat(upCharacters, specCharacters)
}
else if (passlowCriteria!==false && passupCriteria!==true && passnumCriteria!==false && passspecCriteria!==false){
    // create lowercase and num and special criteria
    var arrayCombo = lowCharacters.concat(specCharacters, numCharacters)
}
else if (passlowCriteria!==true && passupCriteria!==false && passnumCriteria!==false && passspecCriteria!==false){
    // create uppercase and num and special criteria
    var arrayCombo = upCharacters.concat(numCharacters, specCharacters)
}
else if (passlowCriteria!==false && passupCriteria!==false && passnumCriteria!==false && passspecCriteria!==false){
    // create lowercase and uppercase and num and special criteria
    var arrayCombo = lowCharacters.concat(upCharacters, numCharacters, specCharacters)
}

// For loop that adds a random character from the combo array that is added up until it reaches the passLength user input
for(var i=0;i<passLength;i++){
    var random = Math.floor(Math.random() * arrayCombo.length)
    randomString+=arrayCombo[random].toString()
}

// Adds the generated password to the form on the webpage
myform.row_password.value = randomString;
}
)
