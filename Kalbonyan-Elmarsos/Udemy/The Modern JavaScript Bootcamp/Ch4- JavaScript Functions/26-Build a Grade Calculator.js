/**
 * Student score
 * total possible score
 * 15/20 -> You got a c (75%)!
 * A 90-100, B 80-89, c 70-79, d 60-69, f 0-59
 */

let gradeCalc = function (score, totalScore) {
    let percent = (score * 100) / totalScore
    let letterGrade = ''
    if(percent >= 0 && percent <=59){
       letterGrade = 'F'
    }
    else if(percent >= 60 && percent <=69){
        letterGrade = 'D'
    }
    else if(percent >= 70 && percent <=79){
       letterGrade = 'C' 
    }
    else if(percent >= 80 && percent <=89){
        letterGrade = 'B'
    }else{
        letterGrade = 'C'
    }
    return `You got a ${letterGrade} (${percent}%)`
}

let firstStudnt = 60
let secondStudent = 90
let thirdStudent = 0

let one = gradeCalc(firstStudnt,300)
let two = gradeCalc(secondStudent,300)
let three = gradeCalc(thirdStudent,300)

console.log(one)
console.log(two)
console.log(three)

