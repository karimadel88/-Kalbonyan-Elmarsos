/**
 * Create function
 * take fahrenheit in
 * return object with all three
 */
let convertFahrenheit = function (fahrenheit){
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5/9),
        celsius: (fahrenheit - 32) * (5/9)
    }
}
let temp = convertFahrenheit(32)
console.log(temp.fahrenheit)
console.log(temp.kelvin)
console.log(temp.celsius)

console.log(`Temp is ${temp.fahrenheit}-fahrenheit, ${temp.kelvin}-kelvin and ${temp.celsius}-celsius`)

temp = convertFahrenheit(72)
console.log(`Temp is ${temp.fahrenheit}-fahrenheit, ${temp.kelvin}-kelvin and ${temp.celsius}-celsius`)