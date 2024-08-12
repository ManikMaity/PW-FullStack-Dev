function printData(data, nextData){
    setTimeout(()=>{
        console.log("Data = ", data);
        if (nextData){
            nextData();
        }
    }, 5000)
}

console.log("Getting data...");
printData(5, ()=>{
    console.log("Getting data...");
    printData(4, ()=>{
        console.log("Getting data...");
        printData(6, ()=>{
            console.log("Getting data...");
            printData(7)
        })
    })
})

