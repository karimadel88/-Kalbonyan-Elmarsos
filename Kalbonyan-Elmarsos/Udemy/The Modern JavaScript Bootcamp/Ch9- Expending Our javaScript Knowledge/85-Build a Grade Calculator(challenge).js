/**
 * Student score
 * total possible score
 * 15/20 -> You got a c (75%)!
 * A 90-100, B 80-89, c 70-79, d 60-69, f 0-59
 */

let gradeCalc = function (score, totalScore) {
    if(typeof(score) === 'number' && typeof(totalScore) === 'number'){
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
    }else {
        throw Error("Please provide number")
    }
}

try{
    let one = gradeCalc(true,300)
    console.log(one)

}catch(e){
    console.log(e.message)
}



