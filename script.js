var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = 0;
  var includeLowercase = false;
  var includeUppercase = false;
  var includeNumeric = false;
  var includeSpecial = false;
  
  passwordLength = prompt("Choose password lengeth must be more than 8 or more and 128 or less:");
  
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return;
  }
  
  includeLowercase = confirm("Include lowercase letters?");
  includeUppercase = confirm("Include uppercase letters?");
  includeNumeric = confirm("Include numeric characters?");
  includeSpecial = confirm("Include special characters?");
  
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select atleast one type of charachters to use.");
    return;
  }
  
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
