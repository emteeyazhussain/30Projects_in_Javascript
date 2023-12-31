const passwordBox = document.getElementById("password");
const lenght = 15;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;':,.<>?/";

// Example: If you want to include additional symbols, you can add them to the 'symbols' string.
// const symbols = "!@#$%^&*()_+[]{}|;':,.<>?/`~"; 

const allChars = uppercase + lowercase +numbers +symbols;
function createPassword() {

  let password="";
  password +=uppercase[Math.floor(Math.random() * uppercase.length)];
  password +=lowercase[Math.floor(Math.random() * lowercase.length)];
  password +=numbers[Math.floor(Math.random() * numbers.length)];
  password +=symbols[Math.floor(Math.random() * symbols.length)];
    
 while (lenght > password.length) {
    
    password +=allChars[Math.floor(Math.random() * allChars.length)];

 }
 passwordBox.value = password;

}

function copyPassword (){
 passwordBox.select();
 document.execCommand("copy");

}