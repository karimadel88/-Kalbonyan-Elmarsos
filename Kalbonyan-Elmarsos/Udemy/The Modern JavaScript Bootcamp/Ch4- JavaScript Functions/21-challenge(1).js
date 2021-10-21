/**
 * Created by - Karim Adel
 * Date - 6/10/2021 at 12:38 PM 
 */

/**
 * ConvertFahrenheitToCelsius
 * Call a couple of times (32 -> 0) (68 -> 0)
 * print converted value
 */

let ConvertFahrenheitToCelsius = function (temp){
    let celsius = (temp - 32) * (5/9)
    return celsius
}

let test1 = ConvertFahrenheitToCelsius(32)
let test2 = ConvertFahrenheitToCelsius(68)

console.log(test1)  // print 0    
console.log(test2)  // print 20
