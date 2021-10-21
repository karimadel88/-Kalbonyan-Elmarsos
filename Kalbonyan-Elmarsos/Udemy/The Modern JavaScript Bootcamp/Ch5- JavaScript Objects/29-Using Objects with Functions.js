let myBook = {
    // Property : value
    title: '1984',
    author: 'George Orwall',
    pageCount: 326
}

let otherBook = {
    // Property : value
    title: 'New story',
    author: 'Karim Adel',
    pageCount: 157
}

// we add argument as a object
let getSummery = function (book) {
    // console.log(`${book.title} by ${book.author}`)
    return {
        summery:`${book.title} by ${book.author}`,
        pageCountSummery : `${book.title} is ${book.pageCount} pages long`
    }
    
}

// calling function
// getSummery(myBook)
// getSummery(otherBook)

// return function
console.log(getSummery(myBook).summery)
console.log(getSummery(otherBook).pageCountSummery)
