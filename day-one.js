const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (e, data)=>{
    if(e) console.log("Error:",e)
    const arr = data.split('\n').map((row) => row.split("   "))
    
    const leftItems = arr.map((row) => +row[0]).sort((a,b)=>a-b)
    const rightItems = arr.map((row) => +row[1]).sort((a,b)=>a-b)

    let allDistances = 0

    for (let i = 0; i < arr.length; i++) {
        allDistances += Math.abs(leftItems[i] - rightItems[i])
    }

    console.log(allDistances); // PART ONE
})