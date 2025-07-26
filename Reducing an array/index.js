const numbers=[1,2,-1,3];
let sum=0;
for (let n of numbers)
    sum +=n;
console.log(sum);
//reducing an array mean adding or sum 
// another way to right reducing array
const add = numbers.reduce(
    (accumulator, currentValue)=>accumulator+currentValue
);
console.log(add);