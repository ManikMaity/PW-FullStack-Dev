function calculateSquare(num){
    return num**2;
}
console.log(calculateSquare(5));

// White a function to calculate sum of three numbers passes as argument 
function addThreeNum (){
    const result = 0;
    for (let i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    return result;
}

console.log(addThreeNum());