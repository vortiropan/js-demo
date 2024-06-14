
function cryptoPassword(password){
    return password.split('').reverse();
}
 let password2 = cryptoPassword('password');
function checkPassword(password, password2){
    return password === password2.reverse().join('') ? true : false; 
}

console.log(checkPassword('password', password2))