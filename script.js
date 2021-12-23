// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  getLength();

  var hasNumbers = confirm("Do you want Numbers added?");
  var hasSpecial = confirm("Do you want Special Characters?");
  var hasUpperCase = confirm("Do you want uppercase Characters?");
  var hasLowerCase = confirm("Do you want lowercase Characters?");






  

  return password;
}

// var pLength = hasNumbers.value

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getLength() {
  var passwordLength = parseInt(
    prompt(
      "Enter the length of requested Password between 8 and 128 characters"
    )
  );

  if (passwordLength >= 8 && passwordLength <= 128) {
    return passwordLength;
  } else {
    getLength();
  }
}