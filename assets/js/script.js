// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowCase = upperCase.toLowerCase();
var specialChars = `"!"#$%&'()*+,-./:;<=>?@^_~"`;
var numbers = '123456789';


lengthPrompt = `What would you like the length of your password to be? \n
(please enter a number between 8 and 128)`;
var validLength;
var passwordLength;
var newPassword;
var rand = [];

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
  var passwordArray = [];
  var password = [];
  generatePassword();
  password = password.join('');
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  function validateAnswer(confirmAnswer, array1) {
    if (confirmAnswer === true ) {
      passwordArray = passwordArray.concat(array1)
    } else {
      return;
    }
  }



  function generatePassword(){
    alert("Lets create a secure password!");

    passwordLength = prompt(lengthPrompt);
  
    validateNum();
    
    validLength = parseInt(passwordLength);
    console.log(validLength)
  
    alert("Now we will pick the criteria of your password. You must pick AT LEAST ONE to generate a password.")
  
    includes();
  
    validateAnswer(includeLowerCase, lowCase);
    validateAnswer(includeUpperCase, upperCase);
    validateAnswer(includeSpecial, specialChars);
    validateAnswer(includeNums, numbers);
  
    console.log(validLength)
  
    console.log(passwordArray.length);

      for (var i = 0; i < validLength; i++ ) {
      password[i] = passwordArray[Math.floor(Math.random() * passwordArray.length)];
      console.log(password)
      }
      // console.log(rand)
      // return rand
  };


}



// var passwordLength = prompt(passwordPrompt) 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Functions

function validateNum() {
  while (parseFloat(passwordLength) < 8 || parseFloat(passwordLength) > 212  || isNaN(passwordLength) === true || passwordLength === "") {
    alert("You must pick a number between 8 and 128. Please enter a new number");
    passwordLength = prompt(lengthPrompt);
  } 
}

function includes() {
  includeLowerCase = confirm(`Would you like any uppercase letters to be included?\n
  (OK is yes. Cancel is no)`);
  includeUpperCase = confirm(`Would you like any uppercase letters to be included?\n
  (OK is yes. Cancel is no`);
  includeSpecial = confirm(`Would you like any special characters to be included?\n
  (OK is yes. Cancel is no)`);
  includeNums = confirm(`Would you like any numbers to be possibly included?\n
  (OK is yes. Cancel is no)`);
  includeAtLeastOne();
}

function includeAtLeastOne() {
  if (includeLowerCase !== true && includeNums !== true && includeSpecial !== true && includeUpperCase !== true) {
    alert("You must pick atleast one criteria");
    includes();
  } 
}


