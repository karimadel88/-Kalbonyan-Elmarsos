// DOM -> document object model

// Query and remove
const p = document.querySelector('p')
// console.log(p)
p.remove()

// Query all and remove
const ps = document.querySelectorAll('p')
ps.forEach(function(pa){
    // console.log(pa.textContent) // note textContent variable to show how element content
    x = 1
    pa.textContent = `value ${x+=1}`

    console.log(pa.textContent)
    // pa.remove() // note remove function can remove one element not more
})


