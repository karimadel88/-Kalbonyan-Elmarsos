/**
 * Create function called isValidPassword
 * true => length is more than 8, doesnt contain'password
 * 
 */

let isValidPassword = function (pass) {
    if(pass.length>8 && !(pass.includes('password'))){
        return true
    }
    else{
        return false
    }

}

console.log(isValidPassword('asd'))
console.log(isValidPassword('abc123!@#$%^&'))
console.log(isValidPassword('asdpassword'))