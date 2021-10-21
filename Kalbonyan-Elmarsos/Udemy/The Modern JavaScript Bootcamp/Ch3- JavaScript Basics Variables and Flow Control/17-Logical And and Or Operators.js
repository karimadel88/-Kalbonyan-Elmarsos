let temp = 65

// example one 
if (temp >= 60) {
    if (temp <= 90){
        console.log('range between 60 an 90')
    }
}
else {
    console.log('out of renge')
}

// Logical And Operator
// and ==> && true if both sides are true. false other
if (temp >= 60 && temp <= 90){
    console.log('range between 60 and 90')
}
else {
    console.log('range between 60 and 90')
}

// or ==> || true if one is true
if (temp <= 0 || temp >= 120){
    console.log('temp is less than or equal to 0 || temp is greater than or equal to 120 || temp between 0 and 120')
}
else {
    console.log('temp greater than 0 and less than 120')
}


