// Global Scope (ConvertFahrenheitToCelsius, test1, test2)
    // Local Scope (temp,   celsius)
        // Local (isFreezing)

let ConvertFahrenheitToCelsius = function (temp){
    let celsius = (temp - 32) * (5/9)
    if  (celsius <= 0) {
        let isFreezing = true
    }
    return celsius
}

let test1 = ConvertFahrenheitToCelsius(32)
let test2 = ConvertFahrenheitToCelsius(68)

console.log(test1)  
