// const puzzleEl = document.querySelector('#puzzle')
// const guessesEl = document.querySelector('#guesses')
// const game1 = new Hangman('Car Parts', 2)

// puzzleEl.textContent = game1.puzzle
// guessesEl.textContent = game1.statusMessage

// window.addEventListener('keypress', function (e) {
//     const guess = String.fromCharCode(e.charCode)
//     game1.makeGuess(guess)
//     puzzleEl.textContent = game1.puzzle
//     guessesEl.textContent = game1.statusMessage
// })
/* Challenge */
// 1- make request for all countries
// 2- parse
// 3- Find country objet by it's country code
// 4- Print the full countryName

const request = new XMLHttpRequest();
const search = ".ng";


request.addEventListener('readystatechange',(e)=>{
    if(e.target.readyState === 4 && e.target.status === 200){
        let dataOfCountry = JSON.parse(e.target.responseText);
        const country = dataOfCountry.find((c)=> dataOfCountry.tld['0'] == search);
        console.log(country.name)
    }else{
        console.log('Not found')
    }
})
request.open('GET','https://restcountries.com/v3.1/all');
request.send();



// Making http request
// const request = new XMLHttpRequest();
// request.open('GET','https://puzzle.mead.io/puzzle?5');
// request.send();

// request.addEventListener('readystatechange',(e)=>{
//     if(e.target.readyState === 4 && e.target.status === 200){
//         let data = JSON.parse(e.target.responseText)
//         console.log(data.puzzle);
//         // console.log(e.target.status)
//     }
//     else{
//         console.log('error')
//     }
//     // console.log(e.target.status);
// })