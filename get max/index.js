
const max = getMax([1,2,3]);

console.log(max);

function getMax(array){
    return array.reduce((a,b ) => (a>b ) ? a:b);
}