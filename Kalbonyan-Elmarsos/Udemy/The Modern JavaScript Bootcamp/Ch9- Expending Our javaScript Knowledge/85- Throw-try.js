const getTip = (amount) => {
    // return amount * .25
    if(typeof (amount) === 'number'){
        return amount * .25
    }else{
        throw Error('Not Valid')
    }
}

try {
    const test = getTip(true)
    console.log(test)
} catch(e){
    console.log('catch block is running')
}