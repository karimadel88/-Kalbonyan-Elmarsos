const ps = document.querySelectorAll('p')
ps.forEach(function(pa){
    // replace p with *******
    // then print new vertion
    pa.textContent = '*******'
    console.log(pa.textContent)
})

// Add new element
// We can do that by three steps

// step 1 create this element
const newPar = document.createElement('p')

// step 2 add text to this element
newPar.textContent = 'New Line From JavaScript File'

// step 3 specify location for this element
const bo = document.querySelector('body')
bo.appendChild(newPar)



