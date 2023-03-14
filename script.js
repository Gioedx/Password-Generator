// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
// Function to prompt user for password options
var passwordLength = 0;
var userChoice = [];
function getPasswordOptions() {
  userChoice = [];
  passwordLength = parseInt(prompt("How many characters would you like your password to have? *Must be between 8 and 128 charactrs*"));
if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  alert("At least 8 characters but no more than 128, Please try again.");
  return false;
}
if (confirm("To add Lowercase Letters click accept")) {
  userChoice = userChoice.concat(lowerCasedCharacters);
}
if (confirm("To add Uppercase letters click accept")) {
  userChoice = userChoice.concat(upperCasedCharacters);
}
if (confirm("To add Special characters click accept")) {
  userChoice = userChoice.concat(specialCharacters);
}
if (confirm("To add Numbers click accept")) {
  userChoice = userChoice.concat(numericCharacters);
}
return true;
}
// Function for getting a random element from an array
function getRandom(arr) {
  var randomChar = Math.floor(Math.random() * userChoice.length);
  return randomChar
}
// Function to generate password with user input
function generatePassword() {
 var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomChar = Math.floor(Math.random() * userChoice.length);
    password = password + userChoice[randomChar];
  }
return password;
}
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var correctPrompts = getPasswordOptions(); 
  var passwordText = document.querySelector('#password');
  if (correctPrompts){
  var genPassword = generatePassword();
  passwordText.value = password;
}
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);