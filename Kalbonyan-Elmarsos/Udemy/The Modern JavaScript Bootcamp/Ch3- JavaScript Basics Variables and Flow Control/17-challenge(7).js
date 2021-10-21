/***
 * Are both vegan ? Only offer up vegan dishes.
 * At least one vegan ? Make sure to offer up some vegan options.
 * Else, Offer up anything on the menue 
 */
let isGeustOneVegan = true
let isGeustTwoVegan = false

if (isGeustOneVegan && isGeustTwoVegan) {
    console.log('Only offer up vegan dishes')
}
else if(isGeustTwoVegan || isGeustTwoVegan) {
    console.log('Make sure to offer up some vegan options')
}
else {
    console.log('Offer up anything on the menue')
}