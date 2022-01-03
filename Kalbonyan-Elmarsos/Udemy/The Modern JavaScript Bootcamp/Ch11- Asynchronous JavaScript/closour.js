const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()  // 1
counter.decrement()  // 0
counter.decrement()  // -1
console.log(counter.get()) // -1

// Adder
const add = (a, b) => a + b
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}
const add10 = createAdder(10)
console.log(add10(-2))  // a = 10 ,b =-2
console.log(add10(20))  // a = 10 ,b=20

const add100 = createAdder(100)
console.log(add100(-90)) // a=100 b=-90

// Tipper
const createTipper = (baseTip) => {
    return (amount) => {
        return baseTip * amount
    }
}
const tip20 = createTipper(.2)
const tip30 = createTipper(.3)
console.log(tip20(100))     // baseTip = .2 amount=100 ==>> 20
console.log(tip30(100))     // baseTip = .3 amount=100 ==>> 30