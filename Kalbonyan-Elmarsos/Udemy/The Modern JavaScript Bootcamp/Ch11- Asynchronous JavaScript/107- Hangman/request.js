const getPuzzle = (callback)=>{
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange',(e)=>{
        if(e.target.readyState === 4 && e.target.status === 200){
            const data = JSON.parse(e.target.responseText)
            callback(data.puzzle)
            // console.log(e.target.status)
        }
        else if(e.target.readyState === 4){
            callback(undefined,'An Error Has Taken Plae')
        }
        // console.log(e.target.status);
    })
    request.open('GET','https://puzzle.mead.io/puzzle');
    request.send();
} 