// Objective: Create a JavaScript function calculateFactorial(num) that returns the factorial of a given positive integer num. 
// The factorial of a number is the product of all positive integers less than or equal to that number. 
// Example: Input: calculateFactorial(5) Output: 120 (as 5! = 5 × 4 × 3 × 2 × 1 = 120)

function calculateFactorial (num) {
    let factorial = num;
    for (let  i = num -1; i>0; i--){
        factorial *= i;
    }
    return factorial;
}
console.log(calculateFactorial(10));