
// ========= ⬇ DO NOT TOUCH THIS CODE ⬇ ======

let genBtn = document.getElementById("btnGen");
let buttonHandler = () => {
    document.getElementById("password").value = addNewPassword();
};
// Event listener for generate PW button
genBtn.addEventListener("click", buttonHandler);

// ========= ⬆ DO NOT TOUCH THIS CODE ⬆ ======

// 1. Must have a working array with symbols, uppercase characters, lowercase characters, and numbers
// 2. Must have a working for loop that returns a random password
// 3. The password must show up on the site when button is pressed
// 4. The password must be between 10 and 18 characters in length
// 5. The site must be deployed
// 6. Site must work correctly when demonstrating its functionality


const addNewPassword = () => {
  //  console.log("hi click the booten");
    let passwordlength = 18;
    let password = '';
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_-+={};<>[]';
    for (let i = 0; i <= passwordlength; i++) {
      let randemNumber = Math.floor(Math.random() * chars.length)
      password += chars.substring(randemNumber,randemNumber + 1);
    }
    return password;  
};




// let lemit = "";

// let bonus = () => {
//   let password = "";
//   let lemit = prompt("enter 50 number")
//   for (let i = 0; i <= lemit; i++) {

//     if (lemit <= 50) {
//       password += value.chars(math.floor(Math.random()))

//     }else {
//       alert("Enter more number")};    
//   } 
//   return password;
// }







