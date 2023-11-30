// Objective: Implement a function fizzBuzz(n) in JavaScript that prints the numbers from 1 to n. 
// For multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". 
// For numbers which are multiples of both three and five, print "FizzBuzz".
//  Example: Input: fizzBuzz(5) Output: 1, 2, Fizz, 4, Buzz

function fizzBuzz (num) {
    for (let i = 1; i <= num; i++){
    if (i%3 == 0){
        if (i%5 == 0){
            console.log("FizzBuzz");
        }
        else {
            console.log("Fizz");
        }
    }
    else if (i%5 == 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
    }
}

console.log(fizzBuzz(15));