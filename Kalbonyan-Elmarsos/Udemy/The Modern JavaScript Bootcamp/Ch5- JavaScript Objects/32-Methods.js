
let restaurent = {
    name : 'KR5',
    guestCapasity : 75,
    guestCount : 0,
    checkAvailability: function(partySize){
        let seatsLeft = this.guestCapasity - this.guestCount
        return (partySize <= seatsLeft)
    }

}
let status = restaurent.checkAvailability(75)
console.log(status)