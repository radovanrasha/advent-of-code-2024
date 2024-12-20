const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (e, data)=>{
    if(e) console.log("Error:",e)
    const arr = data.split('\n').map((row) => row.split(" ").map(Number))
    
    console.log(arr);

    let numOfSafeCombinations = 0

    const isSafeFunc = (comb)=>{
        const isIncreasing = comb[1] > comb[0]
        const isDecreasing = comb[1] < comb[0]
        
        
        for (let i = 0; i < comb.length-1; i++) {
            const diff = comb[i+1] - comb[i]
            
            if(Math.abs(diff) < 1 || Math.abs(diff) > 3) return false
           
            if (isIncreasing && diff <= 0) return false
            if (isDecreasing && diff >= 0) return false
        }

        return true
    }

    for (let i = 0; i < arr.length; i++) {
        const isSafe = isSafeFunc(arr[i])
        if(isSafe) numOfSafeCombinations++
    }

    console.log(numOfSafeCombinations); // PART ONE

})