// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowCase = upperCase.toLowerCase();
var specialChars = `" !"#$%&'()*+,-./:;<=>?@^_~"`;
var numbers = '123456789';


var passwordArray = [];
var passwordLength;
var includeLowerCase;
var includeUpperCase;
var includeNums;
var includeSpecial;
upperCase = Array.from(upperCase);
lowCase = Array.from(lowCase);
specialChars = Array.from(specialChars);
numbers = Array.from(numbers);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  alert("Lets create a secure password!");
    
  passwordLength = prompt(`What would you like the length of password to be.\n
  (please enter a number between 8 and 128)`);

    if (passwordLength < 8 || passwordLength > 128) {
      alert("You must pick a number between 8 and 128. Please enter a new number");
      passwordLength = prompt(`What would you like the length of password to be.\n
      (please enter a number between 8 and 128)`);
    }
    alert("You will be asked to if you would like to include specific criteria, you must select(answer yes) to at least one criteria to continue")
    
    includeLowerCase = prompt(`Would you like any lowercase letters to be possibly included?\n
    (please enter yes or no)`)

    if (includeLowerCase !== "yes" && includeLowerCase !== "no") {
      alert("You must enter yes or no");
      includeLowerCase = prompt(`Would you like any lowercase letters to be possibly included?\n
    (please enter yes or no)`);
    } else if (includeLowerCase === "yes") {
      passwordArray = passwordArray.concat(lowCase);
    }

    includeUpperCase = prompt(`Would you like any uppercase letters to be possibly included?\n
    (please enter yes or no)`)
    if (includeUpperCase !== "yes" && includeLowerCase !== "no") {
      alert("You must enter yes or no");
      includeUpperCase = prompt(`Would you like any uppercase letters to be possibly included?\n
    (please enter yes or no)`);
    } else if (includeLowerCase === "yes") {
      passwordArray = passwordArray.concat(upperCase);
    }
    
    includeNums = prompt(`Would you like any numbers to be possibly included?\n
    (please enter yes or no)`)
    if (includeNums !== "yes" && includeNums !== "no") {
      alert("You must enter yes or no");
      includeNums = prompt(`Would you like any numbers to be possibly included?\n
    (please enter yes or no)`);
    } else if (includeNums === "yes") {
      passwordArray = passwordArray.concat(includeNums);
    }
    
    includeSpecial = prompt(`Would you like any special characters to be possibly included?\n
    (please enter yes or no)`)
    if (includeSpecial !== "yes" && includeSpecial !== "no") {
      alert("You must enter yes or no");
      includeSpecial = prompt(`Would you like any special characters to be possibly included?\n
    (please enter yes or no)`);
    } else if (includeSpecial === "yes") {
      passwordArray = passwordArray.concat(includeNums);
    }






  function generatePassword() {
    for (i=0; i > passwordLength; i++) {
      
    }
  }
};


// var passwordLength = prompt(passwordPrompt) 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



/* parseint or parsefloat   

WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/

// alert("lets create a password");


// alert("You must pick a number between 8 and 128. Please enter a new number")

// alert("You will be asked to if you would like to include specific criteria, you must select(answer yes) to at least one criteria to continue")

// alert("You must enter yes or no")

// alert("You must enter yes or no")

// alert("You must enter yes or no")

// alert("You must enter yes or no")

// alert("You must pick at least one criteria")

// var passwordArray = [];
// var passwordLength = prompt(`What would you like the length of password to be.\n
// (please enter a number between 8 and 128)`);
// var includeLowerCase = prompt(`Would you like any lowercase letters to be possibly included?\n
// (please enter yes or no)`);
// var includeUpperCase = prompt(`Would you like any uppercase letters to be possibly included?\n
// (please enter yes or no)`);
// var includeNums = prompt(`Would you like any numbers to be possibly included?\n
// (please enter yes or no)`);
// var includeSpecial = prompt(`Would you like any special characters to be possibly included?\n
// (please enter yes or no)`);

// function validateString(promptAnswer, promptVar) {
//   promptAnswer = prompt()
//   if (promptAnswer.toLowerCase !== "yes" || promptAnswer.toLowerCase !== "no") {
//     alert("You must enter yes or no");
//     promptVar;
//   } else {
//     return;
//   }
// }

// function validateNum(promptAnswer, promptPhase, validVar) {
//   promptAnswer = parseFloat(prompt(promptPhase));
//   while (parseFloat(promptAnswer) < 8 || parseFloat(promptAnswer) > 212 ) {
//     alert("You must pick a number between 8 and 128. Please enter a new number");
//     promptAnswer = parseInt(prompt(promptPhase));
//     validVar = promptAnswer;
//     console.log(validVar);
    
//   } 
//   }

//   function validateNum 

  // function validateNum(promptAnswer, promptPhase, validVar) {
  //   promptAnswer = parseFloat(prompt(promptPhase));
  //   if (parseFloat(promptAnswer) < 8 || parseFloat(promptAnswer) > 212 ) {
  //     console.log(promptAnswer);
  //     validVar = promptAnswer;
  //   } else {
  //     alert("You must pick a number between 8 and 128. Please enter a new number");
  //     promptAnswer = parseInt(prompt(promptPhase));
  //   }
  // }


// function validateAnswer(promptAnswer, array1, array2) {
//   if (promptAnswer.toLowerCase === "yes" ) {
//     passwordArray = array1.concat(array2)
//   } else {
//     return;
//   }
// }

// possible idea, hide password initially, button reveals or hides.



