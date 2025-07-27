//put all numbers in array
function max(...args){
    console.log(args)
}
console.log(max(1,2,3,4,8));
//it read the first number
function sum(args){
    console.log(args)
}
console.log(sum(0,2,3,4,8));
//to get the sum of all numbers with in one line
function total(...args){
    return args.reduce((a,b) =>a+b);
}
console.log(total(1,2,3,4,8));
//to calculat discount and the last price after discount
function totals(discount, ...price){
    const totals=price.reduce((a,b) =>a+b);
    return totals * ( 1- discount);
}
console.log(totals(0.1,2,56));