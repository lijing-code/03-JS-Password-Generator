// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
}
// The definition of function generatePassword()
function generatePassword() {
  // Define four variables to install the password characters. Each of it is a string.
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  
  // Start generate the password with a prompt.
  var userChoice = prompt("How many characters do you want to generate the password?");

  // The password length should between 8 ~ 128 characters
  if (userChoice>=8 && userChoice <=128){
    window.alert("Let's start generating a password!");

    // Set up an empty array to save the criterias that the user choose to generate the password.
    var passwordDataBase = [];
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
    } else {
      window.alert("Please select at least one criteria to inclued in the password.")
    }
  
  // If the user choose the length is out of the range, make an alert.
  }else{
    window.alert("The length of the password should between 8 and 128. Please enter again.");
  }
  
  var randomChoices=[]; // An empty array to save the final password characters.
  var i = 0; // i is the index of array passwordDataBase. 
  
  // n is the number that the user entered in the prompt (8~128 chars). 
  // Each time the computer generated a character, n-1.
  // When n = 0, all the password characters have been choosed, and the loop stopped.
  for (var n = userChoice; n > 0; n--){
      // k is the random index in each items (strings) in passwordDataBase.
      var k = Math.floor(Math.random()*passwordDataBase[i].length);
      // Add the random character in the final password array.
      randomChoices += passwordDataBase[i][k];
      
      // If i < n, the computer need to pick multiple characters in each items in passwordDataBase. 
      if(i==passwordDataBase.length-1){
        i = 0;
      } else {
        i++;
      }
    }
  // Shuffle the array (randomChoices) to make the new password more randomly.
  var newPassword = [];
  for (var i = 0; i < randomChoices.length;i++){
    newPassword += Math.floor(Math.random()*randomChoices.length);
  }

  return newPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
