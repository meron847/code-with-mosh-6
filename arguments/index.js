//Argument is the value you give to a function when you call it.


//to see index value 
function sum(a,b) {
    console.log(arguments);
    return a+b;
}
console.log(sum(1,2,3,4,5));
// add all the value
function max(){
    let total =0;
    for (let value of arguments)
    total +=value;
    return total;

}
console.log(max(1,2,3,4));