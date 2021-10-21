/**
 * convert fahrenheit to cesius and kelvin then print it
 */
let fahrenheit = 32

// celsius (32°F − 32) × 5/9 = 0°C
let celsius = (fahrenheit - 32) * (5/9)
// print celsius value
console.log(celsius) // will print 0C

// kelvin (32°F − 32) × 5/9 + 273.15
let kelvin = (fahrenheit - 32) * (5/9) + 273.15
// print kelvin value
console.log(kelvin) // will print 273.15K

