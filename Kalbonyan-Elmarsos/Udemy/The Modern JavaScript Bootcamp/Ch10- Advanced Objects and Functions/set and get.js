const date = {
    locations: [],
    get location() {
        return this._location
    },
    set location(value) {
        this._location = value.trim()
        this.locations.push(this._location)
    }
}

date.location = 'Karim'
date.location = 'Sameh'
date.location = 'Ibrahim '
console.log(date)