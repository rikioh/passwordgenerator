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

// TODO create randomizer function

function randomize(){
    var arrayPick = Math.ceil(Math.random()*4)
    // console.log(arrayPick)
    if (arrayPick===1){
        var random = Math.floor(Math.random() * lowCharacters.length)
        return randomString+=lowCharacters[random].toString()
        
    }
    else if (arrayPick==2){
        var random = Math.floor(Math.random() * upCharacters.length)
        return randomString+=upCharacters[random].toString()
        
    }
    else if (arrayPick==3){
        var random = Math.floor(Math.random() * numCharacters.length)
        return randomString+=numCharacters[random].toString()
        
    }
    else {var random = Math.floor(Math.random() * specCharacters.length)
       return randomString+=specCharacters[random].toString()
    }
}

randomizeE1.addEventListener ("click", function createPassword() {
        for(var i=0;i<passLength;i++){
            randomize()
        }
        console.log(randomString)
    }
)

