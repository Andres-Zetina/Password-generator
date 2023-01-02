var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Set up variables for the password criteria
  var passwordLength = 0;
  var includeLowercase = false;
  var includeUppercase = false;
  var includeNumeric = false;
  var includeSpecial = false;
  
  // Prompt the user for password length
  passwordLength = prompt("Enter the desired length of your password (8-128 characters):");
  
  // Validate password length
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters. Please try again.");
    return;
  }
  
  // Prompt the user for character types to include
  includeLowercase = confirm("Include lowercase letters in the password?");
  includeUppercase = confirm("Include uppercase letters in the password?");
  includeNumeric = confirm("Include numeric characters in the password?");
  includeSpecial = confirm("Include special characters in the password?");
  
  // Validate character type selection
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one character type to include in the password. Please try again.");
    return;
  }
  
  // Set up the character pool based on user's character type selections
  var characterPool = "";
  if (includeLowercase) {
    characterPool += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeUppercase) {
    characterPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumeric) {
    characterPool += "0123456789";
  }
  if (includeSpecial) {
    characterPool += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }
  
  // Generate the password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += characterPool.charAt(Math.floor(Math.random() * characterPool.length));
  }
  
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
