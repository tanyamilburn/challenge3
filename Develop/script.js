// Assignment code here
function generatePassword (){
  let passwordCriteria = {
    passwordLength: 8,
    characterTypes: {
      lowerCase: false,
      upperCase: false,
      numeric: false,
      specialCharacters: false,
    }
  }
  passwordCriteria.passwordLength = prompt("What is the desired length of your password? Choose between 8 and 128 characters.")
  if (passwordCriteria.passwordLength < 8){
    return "This password is too short."
  }
  else if (passwordCriteria.passwordLength >128){
    return "This password is too long."
  }
  passwordCriteria.characterTypes.lowerCase = confirm("Do you want your password to contain lowercase letters?")
  passwordCriteria.characterTypes.upperCase = confirm("Do you want your password to contain uppercase letters?")
  passwordCriteria.characterTypes.numeric = confirm("Do you want your password to contain numbers?")
  passwordCriteria.characterTypes.specialCharacters = confirm("Do you want your password to contain special characters?")

  
  let passwordString = ''
  for (let i = 0; i < passwordCriteria.passwordLength; i++){
    
    passwordString = passwordString + generateCharacter(passwordCriteria)
    
  }
  return passwordString
  console.log(passwordString)
}



function generateCharacter(criteria){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz' //26
  const symbols = '!@#$%^&*()?<>{}+_' //17

  // determine if character should be alpha, numeric, or special
  let alphaNumericSpecial = []
  let randomCharacterType 
  let character

  if(criteria.characterTypes.lowerCase || criteria.characterTypes.upperCase) {
    alphaNumericSpecial.push('alpha')
  }
  if (criteria.characterTypes.numeric) {
    alphaNumericSpecial.push('numeric')
  }
  if (criteria.characterTypes.specialCharacters) {
    alphaNumericSpecial.push('special')
  }
  randomCharacterType = Math.floor(Math.random() * alphaNumericSpecial.length)

  // generate random character
  // if alpha, upper or lower
  if(alphaNumericSpecial[randomCharacterType] === 'alpha') {
    let randomAlphaNum = Math.floor(Math.random() * 26 )
    let alphabetArray = alphabet.split('')
    character = alphabetArray[randomAlphaNum]

    if(criteria.characterTypes.upperCase && criteria.characterTypes.lowerCase){
      alphaChoice = Math.floor(Math.random() * 2)
      if (alphaChoice === 0) {
        character = character.toUpperCase()

      } 
    }
    else if (criteria.characterTypes.upperCase){
      character = character.toUpperCase()
    } 
  }

  if(alphaNumericSpecial[randomCharacterType] === 'numeric'){
    character = Math.floor(Math.random() * 10)
  }

  if (alphaNumericSpecial[randomCharacterType] === 'special'){
    let randomSpecialNum = Math.floor(Math.random() * 17)
    let specialArray = symbols.split('')
    character = specialArray[randomSpecialNum]
  }

  return character

}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
