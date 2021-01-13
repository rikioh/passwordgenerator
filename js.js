// Button for the function
var randomizeE1 = document.querySelector("#randomize");
var randomizeE2 = document.querySelector("#prompt");

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

randomizeE2.addEventListener ("click", function selectCriteria() {

// create a prompt for password length (8-128)
var passLength = prompt("Please enter a passcode length (between 8-128)")
// validate that the item entered is numerical
while(isNaN(passLength) || passLength < 8 || passLength > 128){
    var passLength = prompt("Please enter a passcode length (between 8-128)")
}

var numpassLength = parseInt(passLength,10)
console.log(numpassLength)

// create a prompt for password criteria general
var passlowCriteria = confirm("Select confirm if you wish to include lowercase letters in your passcode")
var passupCriteria = confirm("Select confirm if you wish to include uppercase letters in your passcode")
var passnumCriteria = confirm("Select confirm if you wish to include numbers in your passcode")
var passspecCriteria = confirm("Select confirm if you wish to include special characters in your passcode")

    // create a validation that at least one item was selected
while (passlowCriteria!==true && passupCriteria!==true && passnumCriteria!==true && passspecCriteria!==true){
    alert("You must select confirm for at least one criteria")
    var passlowCriteria = confirm("Select confirm if you wish to include lowercase letters in your passcode")
    var passupCriteria = confirm("Select confirm if you wish to include uppercase letters in your passcode")
    var passnumCriteria = confirm("Select confirm if you wish to include numbers in your passcode")
    var passspecCriteria = confirm("Select confirm if you wish to include special characters in your passcode")
}
// create a confirm for selection validation
var passConfirm = confirm("Please confirm your passcode criteria which you selected")

if (passlowCriteria!==false && passupCriteria!==true && passnumCriteria!==true && passspecCriteria!==true){
    // create lowercase only criteria
}
else if (passlowCriteria!==true && passupCriteria!==false && passnumCriteria!==true && passspecCriteria!==true){
    // create uppercase only
    
}
else if (passlowCriteria!==true && passupCriteria!==true && passnumCriteria!==false && passspecCriteria!==true){
    // create number only
}
else if (passlowCriteria!==true && passupCriteria!==true && passnumCriteria!==true && passspecCriteria!==false){
    // create special only
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
console.log(arrayCombo)

for(var i=0;i<passLength;i++){
    var random = Math.floor(Math.random() * arrayCombo.length)
    randomString+=arrayCombo[random].toString()
}
console.log(randomString)

}
)


// function randomize(){
//     var random = Math.floor(Math.random() * arrayCombo.length)
//         return randomString+=arrayCombo[random].toString()
// }

// randomizeE1.addEventListener ("click", function createPassword() {
//         for(var i=0;i<passLength;i++){
//             randomize()
//         }
//         console.log(randomString)
//     }
// )


// backup code
// function randomize(){
//     var arrayPick = Math.ceil(Math.random()*4)
//     if (arrayPick===1){
//         var random = Math.floor(Math.random() * lowCharacters.length)
//         return randomString+=lowCharacters[random].toString()
//     }
//     else if (arrayPick==2){
//         var random = Math.floor(Math.random() * upCharacters.length)
//         return randomString+=upCharacters[random].toString()
//     }
//     else if (arrayPick==3){
//         var random = Math.floor(Math.random() * numCharacters.length)
//         return randomString+=numCharacters[random].toString()
//     }
//     else {var random = Math.floor(Math.random() * specCharacters.length)
//        return randomString+=specCharacters[random].toString()
//     }
// }