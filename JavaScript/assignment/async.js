// Predict the out of following questions without executing them: 

// console.log("A");
// setTimeout(() => console.log("B"), 1000);
// console.log("C");

// Output => 
// "A"
// "C"
// "B"


// setTimeout(() => {
//     console.log("A");
//     setTimeout(() => console.log("B"), 1000);
// }, 1000);
// console.log("C");
// "C"
// "A"
// "B"


// setTimeout(() => console.log("A"), 3000);
// setTimeout(() => console.log("B"), 2000);
// setTimeout(() => console.log("C"), 1000);
// "C"
// "B"
// "A"


// console.log("A");
// setTimeout(() => console.log("B"), 0);
// console.log("C");
// "A"
// "C"
// "B"



// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000);
// }
// 3
// 3
// 3



// setTimeout(() => {
//     console.log("A");
//     setTimeout(() => {
//         console.log("B");
//         setTimeout(() => console.log("C"), 500);
//     }, 1000);
// }, 1500);

// "A"
// "B"
// "C"


// console.log("A");
// setTimeout(() => console.log("B"), 1000);
// for(let i = 0; i < 1000000000; i++) {}  // Long loop
// console.log("C");
// "A"
// "C"
// "B"


// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), i * 1000);
// }
// 3
// 3
// 3




// for (var i = 0; i < 3; i++) {
//     setTimeout((j) => {
//         console.log(j);
//         setTimeout(() => console.log(j + 1), 1000);
//     }, i * 2000, i);
// }
// 0
// 1
// 1
// 2
// 2
// 3



// setTimeout(() => console.log("A"), 2500);
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log("B" + i);
//         setTimeout(() => {
//             console.log("C" + i);
//         }, i * 500 + 500);
//     }, i * 1000);
// }
// B3
// C3
// A
// B3 ....


// function first(callback) {
//     setTimeout(() => {
//         console.log("first");
//         callback();
//     }, 500);
// }
// function second() {
//     console.log("second");
// }
// first(second);

// first 
// second




// let count = 0;
// setTimeout(() => console.log(count++), 1000);
// setTimeout(() => console.log(count++), 2000);
// setTimeout(() => console.log(count++), 3000);
// 0
// 1
// 2


// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000 * i);
// }

// 0
// 1
// 2


// for (var i = 0; i < 3; i++) {
//     (function(j) {
//         setTimeout(() => console.log(j), 2000 * j);
//     })(i);
// }
// 0
// 1
// 2


// console.log("1");
// setTimeout(() => {
//     console.log("2");
//     setTimeout(() => console.log("3"), 1000);
// }, 2000);
// setTimeout(() => console.log("4"), 1000);
// console.log("5");
// 1
// 5
// 4
// 2
// 3
