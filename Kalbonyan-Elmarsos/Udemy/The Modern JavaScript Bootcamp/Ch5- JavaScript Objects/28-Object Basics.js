
let myBook = {
    // Property : value
    title: '1984',
    author: 'George Orwall',
    pageCount: 326

}
console.log(myBook)

console.log(myBook.author)

console.log(`my book title is ${myBook.title}, its author is ${myBook.author} and pageCount is ${myBook.pageCount}`)

// to edit object
console.log(`${myBook.title} by ${myBook.author}`) // will print 1989 by George Orwall
myBook.title = 'new story'
console.log(`${myBook.title} by ${myBook.author}`) // will print new story by George Orwall