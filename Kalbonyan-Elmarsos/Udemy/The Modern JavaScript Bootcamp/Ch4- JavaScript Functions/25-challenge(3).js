/**
 * A 25% tip on 40$ would be 10$ 
 *
 */

let getTip = function (total, tipPercent=0.2) {
    let percent = tipPercent*100
    let result = total * tipPercent
    return `A ${percent}% tip on ${total}$ would be ${result}$` 
    // return `A ${tipPercent * 100}% tip on ${total}$ would be ${total * tipPercent}$`    
   
}

let tip = getTip(55)
console.log(tip)