
let number=arrayFormRange(10,4);

console.log(number)
function arrayFormRange(max,min){

    const output=[];

    for(let i=min;i<=max; i++)

        output.push(i);

    return output;
}

