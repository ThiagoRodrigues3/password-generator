// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password
}

function generatePassword() {
  getLength()

  var hasLowerCase = confirm("Do you want lowercase Characters?");
  var hasUpperCase = confirm("Do you want uppercase Characters?");
  var hasNumbers = confirm("Do you want Numbers added?");
  var hasSpecial = confirm("Do you want Special Characters?");

  var lowerCasedCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
  var upperCasedCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]
  var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var specialCharacters = ["@","%","+","/",",", "!","#","$","^","?",":",",",")","(","}","{", "]","[","~","-","_",".",]
  
  let pass = lowerCasedCharacters

  if (hasUpperCase) pass = lowerCasedCharacters.concat(upperCasedCharacters)
  if (hasNumbers) pass = lowerCasedCharacters.concat(numericCharacters)
  if (hasSpecial) pass = lowerCasedCharacters.concat(specialCharacters)
  
  var passwordInfo = []
  for (let i = 0; i < passwordLength; i++) {
    passwordInfo.push(Math.floor(Math.random) * pass.length)
    }
  console.log(passwordInfo.join(''))
  return password
}

// var pLength = hasNumbers.value

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function getLength() {
  const passwordLength = parseInt(
    prompt(
      "Enter the length of requested Password between 8 and 128 characters"
      )
      );
      
      if (passwordLength >= 8 && passwordLength <= 128) {
        return
      } else {
        getLength();
      }
    }
    
    console.log(passwordLength)