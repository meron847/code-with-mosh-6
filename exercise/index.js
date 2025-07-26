const number=[1,2,3,4];
console.log(includes(number, 1))
function includes(array, serchElement){
    for(let element of array)
        if(element===serchElement)
        return true;
    return false;
}