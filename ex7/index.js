const sum=[1,2,3,4];
console.log(sum)
function total(...num){
    return num.reduce((a,b)=>a+b)
}
console.log(total(1,2,3,4))


//seconde exercise
//creat circle and set read only property
const circle={
    radius:1,
    get area(){
        return Math.PI * this.radius * this.radius;
    }
};
console.log(circle.area);//you can check on browser by righting circle.radius=2 or circle.area you can read on it
//3rd exercise,error handling
const numbers=[1,2,3,4];

const count= countOccurrences(null,1);
console.log(count);
try{
    const numbers=[1,2,3,4];
    const count =countOccurrences(null ,1);
    console.log(count);
}
catch(e){
console.log(e.message);
}
function countOccurrences(array, searchElement){
    if(!Array.isArray(array))
        throw new Error('Invalid array')

    return array.reduce((accumulator, current)=> {
        const occurrence =(current === searchElement) ? 1:0;
        return accumulator + occurrence;
    },0);
}



