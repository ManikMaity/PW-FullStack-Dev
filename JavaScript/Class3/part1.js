// let tempreture = 16

// if (tempreture < 20){
//     console.log("Its really cold")
// }
// else {
//     console.log("its realy HOT")
// }


// console.log("PW Skills")

let score = 110;
let life = 3;
let bullets = 1000;
console.log("Welcome to game!");
if (score > 99) {
    console.log("You got a life up")
    score -= 100;
    life++;
    bullets = 2000
    console.log(bullets);
}
else {
    console.log("You did'nt got life up")
}
console.log(`Your scrore is ${score} and life is ${life} and ${bullets}`)


// Global scope
// local scope -- > if, else, functions, loops

// short hands

let balance  = 500;
if (balance > 100) console.log("More then 100");


// Build a rating system for pizzahut

// 1 star -- poor
// 2 start -- emm, ok
// 3 -- average
// 4 - cool
// 5 -- great
// 6 -- awsome
// 7 - nailed it

let star = "5";
star = parseInt(star);

switch (star) {
    case 1:
        console.log("poor")
        break;
    case 2 :
        console.log("emm, ok")
        break;
    case 3 : 
        console.log("average")
        break;
    case 4 :
        console.log("cool")
        break;
    case 5 :
        console.log("great")
        break;
    case 6 :
        console.log("awsome")
        break;
    case 7:
        console.log("nailed it")
        break;
    default :
        console.log("Not a proper rating")
}



