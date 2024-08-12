function getData (dataID){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("DATA = ", dataID);
            resolve("success");
        }, 2000);
    })
}

// need to call
async function getAllData (){
    await getData(5);
    await getData(10);
}

// IIFE dont need to called
(async function (){
    await getData(5);
    await getData(10);
})();