// Global (name)
    // Local (name)
        // Local
    // Local

let name = 'karim'

if (true) {
    let name = 'adel'
    if (true) { 
        name = 'jen'
        console.log(name) // will print adel
    }
}
console.log(name) // will print karim

if (true) {
    console.log(name) // will print karim
}