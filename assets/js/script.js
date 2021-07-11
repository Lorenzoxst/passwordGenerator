// Assignment Code
// Variables
var generateBtn = document.querySelector("#generate");

// created initial strings. easier than typing out long arrays.
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowCase = upperCase.toLowerCase();
var specialChars = `"!"#$%&'()*+,-./:;<=>?@^_~"`;
var numbers = '123456789';

//created to simply seperate initial prompt for ease of typing. 
var lengthPrompt = `What would you like the length of your password to be? \n
(please enter a number between 8 and 128)`;

// created to store user input and then validation. Validation var probably unnecassary. 
var validLength;
var passwordLength;


// creating global variables that will store user input. 
var includeLowerCase; 
var includeUpperCase;
var includeNums;
var includeSpecial;

// Changing previosly declared variables into arrays. 
upperCase = Array.from(upperCase);
lowCase = Array.from(lowCase);
specialChars = Array.from(specialChars);
numbers = Array.from(numbers);



// Write password to the #password input
function writePassword() {
  // created to seperate arrays, one to store the concated arrays based on user input, other to store the password generated from generate password.
  var passwordArray = [];
  var password = [];
  generatePassword();
  // take password array and turn them into a string with no commas or spaces. 
  password = password.join('');
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // function created within writepassword so passwordArray would work locally.
  function validateAnswer(confirmAnswer, array1) {
    if (confirmAnswer === true ) {
      passwordArray = passwordArray.concat(array1)
    } else {
      return;
    }
  }

  function generatePassword(){
    alert("Lets create a secure password!"); //initial alert

    passwordLength = prompt(lengthPrompt); // prompt asking for a length.
  
    validateNum(); // function that validates that the number entered is allowed.
    
    validLength = parseInt(passwordLength); //converts passwordLength into a int and stores it in a new var.
  
    alert("Now we will pick the criteria of your password. You must pick AT LEAST ONE to generate a password.") // alert for clarity.
  
    includes(); // validates that atleast one criteria was chosen. 
  
    // concats arrays to passwordArray based on user input.
    validateAnswer(includeLowerCase, lowCase);
    validateAnswer(includeUpperCase, upperCase);
    validateAnswer(includeSpecial, specialChars);
    validateAnswer(includeNums, numbers);

    // loops through final passwordArray randomly up to the length of the number chosen by user, saves the random value into the password array.
    for (var i = 0; i < validLength; i++ ) {
      password[i] = passwordArray[Math.floor(Math.random() * passwordArray.length)];
      }
  };


}

generateBtn.addEventListener("click", writePassword);


// Functions
// validates the number given by the user.
function validateNum() {
  while (parseFloat(passwordLength) < 8 || parseFloat(passwordLength) > 212  || isNaN(passwordLength) === true || passwordLength === "") {
    alert("You must pick a number between 8 and 128. Please enter a new number");
    passwordLength = prompt(lengthPrompt);
  } 
}
// contains all of the comfirm questions so they can be looped back over if necessary.
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
// validates that atleast one criteria was chosen.
function includeAtLeastOne() {
  if (includeLowerCase !== true && includeNums !== true && includeSpecial !== true && includeUpperCase !== true) {
    alert("You must pick atleast one criteria");
    includes();
  } 
}


