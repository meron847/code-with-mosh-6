function Circle(radius){
    this.radius=radius;
    this.draw=function() {
        console.log('draw');
    }
}
const circle=new Circle(10);
/*
circle.location = {x:1,y:2};//this line is called adding a proprerty 
//abstraction is hide the details show the essential we want to abstract a code we modifai where we calle the code serch for mor info about abstruction.
*/
//to edumerate all the changes we can use for in loops
for(let key in circle){
    if (typeof circle[key] !== 'function')
        console.log(key,circle[key]);
}
//to get all the objects in the key wi use object.key
const keys = Object.keys(circle);
console.log(keys);
//to check a existancy or  property we use in loop.
if ('radius' in circle){
 console.log('Circle has a radius.');
}
   