const numbers = [1, -2, 3, -4, 5];
const positive = numbers.filter(n => n > 0);
console.log(positive);

[[2], [4, 6], [8]];

const numbers2 = [2, 4, 3, 1];
const squareSum = numbers2.reduce((acc, num) => {return acc + (num**2)}, 0);
console.log(squareSum);

//9

const numbers3 = [1, 2, 3, 4, 5];
let sum = 0;
const evenIndexSum = numbers3.forEach((n, i) => {
   if (i%2 == 0) sum+=n;
})
console.log(sum)

function customMap (arr, fn){
   let result = [];
   for (let i = 0; i < arr.length; i++){
      result.push(fn(arr[i], i, arr));
   }
   return result;
}

let a = customMap([1, 2, 3], (n) => {
   return n*n;
})
console.log(a)