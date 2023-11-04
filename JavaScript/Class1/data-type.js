// Two javacript data type -

// Primitive (STACK) //Stack and Heap is kind of momomey
/*
string
numvber
boolean
null
undefined
symbol
bigInt
*/

const fname = "manik";
const age = 19
const scrore = 200
let isteen = false
let vertion = null
let balabce = undefined
const buttonId = Symbol("id")
const longNum = 5666664566322556n;


// Reference  (non-primitive) - (HEAP)

/* 
Arrays
Objects
Functions

*/

// arrays
const array = [1, 2, 3, 4, 5]
const familyNname = [
    "manik",
    "suman",
    "prasant"
]


// objects 
const userObject = {
    name: "manik",
    age: 20,
    islog: true
}
const anotherUser = userObject; // if we change userObject then anotherUser will change


// functions 
const sayhello = function(){
    console.log("Manik");
}

let n = "pw";
