// let promise = new Promise((resolve, reject) => {
//     console.log("Hello");
//     reject(123);
// })

// promise have three states - pending, fulfilled, rejected

// function getData (data, nextFunc){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("Data = ", data);
//             resolve("Success");
//             if(nextFunc){
//                 nextFunc();
//             }
//         }, 10000)
//     })
// }

// let resultData = getData(55);

// const getPromise = ()=>{
//    return new Promise((resolve, reject) =>{
//         console.log("This is a promise");
//         reject("network error");
//         resolve("")
//     })
// }

// let promise = getPromise();
// promise.then((res)=>{
//     console.log("Promise Fulfilled", res);
// })

// promise.catch((err)=>{
//     console.log("Promise Rejected : ", err)
// })

// function ansycFunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Some data 1");
//       resolve("success");
//     }, 5000);
//   });
// }

// function ansycFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Some data 2");
//       resolve("success2");
//     }, 5000);
//   });
// }

// // dot then chaining
// console.log("fatching data 1..");
// const data1 = ansycFunc();
// data1.then((res) => {
//   console.log(res);
//   const data2 = ansycFunc2();
//   console.log("fatching data 2..");
//   data2.then((res) => {
//     console.log(res);
//   });
// });

// // simplier format .then chaining
// console.log("fatching data 1..");
// ansycFunc().then((res) => {
// console.log(res);
// console.log("fatching data 2..");
// ansycFunc2().then((res) => {
//     console.log(res);
//   });
// });


function getData (dataID){
    console.log("Getting data...");
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("DATA = ", dataID);
            resolve("success");
        }, 2000);
    })
}

// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res);
//     })
// })


// promice chaining / .then chaining
getData(1)
    .then((res) =>{
        return getData(2);
    })
    .then((res) =>{
        return getData(3);
    })
    .then((res) =>{
        console.log(res);
    })