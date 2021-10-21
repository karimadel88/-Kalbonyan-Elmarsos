/**
 * seatParty
 * removeParty
 */

 let restaurent = {
    name : 'KR5',
    guestCapasity : 75,
    guestCount : 0,
    checkAvailability: function(partySize){
        let seatsLeft = this.guestCapasity - this.guestCount
        return (partySize <= seatsLeft)
    },
    seatParty: function (partySize) {
        this.guestCount += partySize
    },
    removeParty: function (partySize) {
        this.guestCount -= partySize
    }

}

restaurent.seatParty(72)
console.log(restaurent.checkAvailability(4)) // False
restaurent.removeParty(5)
console.log(restaurent.checkAvailability(4)) // True