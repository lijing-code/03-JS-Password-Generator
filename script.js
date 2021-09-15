// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// The definition of function generatePassword()
// Define four variables to install the password characters. Each of it is a string.
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var userChoice =0 // Set up an variable to store the user entered number. 

// Create a function to generate the user's password criterias.
function returnCustomerOptions() {
  var passwordDataBase = []; // Create an array to store the criteria that the user choose to generate the password.
  var userChoiceFlag = true;
  while(userChoiceFlag){
    // Start generate the password with a prompt.
    userChoice = prompt("How many characters do you want to generate the password?");
    // The password length should between 8 ~ 128 characters
    if (userChoice>=8 && userChoice <=128){
      window.alert("Let's start generating a password!");
      // Set up an empty array to save the criterias that the user choose to generate the password.
      
      var is_true = window.confirm("Do you agree to add lowercase in your password?");
      if (is_true){
        passwordDataBase.push(lowerCase); // add var lowerCase (string) in array
      } 
      
      is_true = window.confirm("Do you agree to add uppercase in your password?");
      if (is_true){ 
        passwordDataBase.push(upperCase); // add var upperCase (string) in array
      } 

      is_true = window.confirm("Do you agree to add numbers in your password?");
      if (is_true){ 
        passwordDataBase.push(numbers); // add var numbers (string) in array
      } 

      is_true = window.confirm("Do you agree to add special characters in your password?");
      if (is_true){ 
        passwordDataBase.push(specialChars); // add var specialChars (string) in array
      } 

      // Make sure the user choose at least one criteria to inclue in the password.
      if (passwordDataBase.length > 0){
        window.alert("You want to choose " + userChoice + " characters in " + passwordDataBase);
        userChoiceFlag = false;
      } else {
        window.alert("Please select at least one criteria to inclued in the password.")
        userChoiceFlag = true;
      }
    // If the user choose the length is out of the range, make an alert, and re-enter the length of the password.
    }else{
      window.alert("The length of the password should between 8 and 128. Please enter again.");
      userChoiceFlag = true;
    }
  }
  return passwordDataBase;
}

var randomChoices=[]; // Create an array to store the characters choosen from the passwordDataBase. 
function generatePassword() {
  var passwordDataBase = returnCustomerOptions();
  var i = 0;// i is the index of array passwordDataBase.
  var k = 0;  
  // n is the count number that finally equals to userChoice. 
  // Each time the computer chooses a character, n+1.
  // When n = userChoice, all the password characters have been chosen, and the loop stopped.
  for (var n = 1; n <= userChoice; n++){
    // k is the random index in each items (strings) in passwordDataBase.
    k = Math.floor(Math.random() * passwordDataBase[i].length);
    // Add the random character in the final password array.
    randomChoices.push(passwordDataBase[i][k]);
    // If i < n, the computer need to pick multiple characters in each items in passwordDataBase. 
    if(i == passwordDataBase.length-1){
      i = 0;
    } else {
      i++;
    }  
  }

  // Shuffle the array (randomChoices) to make the new password more randomly.
  var newPassword = [];
  while (randomChoices.length > 0) {
    k = Math.floor(Math.random()*randomChoices.length);
    newPassword += randomChoices[k];
    // Delete the character in randomChoices that has been chosen in order to avoid reptation choice. 
    randomChoices.splice (k, 1);
  }
  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
