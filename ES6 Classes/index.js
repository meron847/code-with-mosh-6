/*
function Circle(radius){
    this.radius=radius;

    this.draw=function(){
        console.log('draw');
    }
}*/

//now we want wright this code with ES6 classes
class Circle{
   constructor(radius){
    this.radius=radius;
    this.move=function(){}//if we donot want  a meta end(include) in prototype we need to define in the constructur like we did in this line
   }
   draw() {
    console.log('draw');
   }
}
const c = new Circle(1);//check it in console browser jot down c 