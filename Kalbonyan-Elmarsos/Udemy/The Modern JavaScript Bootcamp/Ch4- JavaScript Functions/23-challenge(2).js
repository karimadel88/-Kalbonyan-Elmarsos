/**
 * git tip
 * total, tipPercent = 0.2
 */

let getTip = function (total, tipPercent=0.2) {
    return total * tipPercent    
}

let tip = getTip(55)
console.log(tip)