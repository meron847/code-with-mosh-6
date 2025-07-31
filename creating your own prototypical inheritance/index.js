function Shape(){

}
Shape.prototype.duplicate= function(){
    console.log('duplicate');
}

function Circle(radius){
    this.radius = radius;
}

Circle.prototype.draw=function(){
    console.log('draw');
}

const s =new Shape();
const c = new Circle(1);// here is what we are doing we have the c object which inherits from circleBase(Circle.prototype) and this cercleBase inherits from objectBase similar to Sapeobj.


//what if we want to c inherit from circleBase and circleBase inherit from shapeBase again shapBase inherit from objectBase.
function Shape(){

}
Shape.prototype.duplicate= function(){
    console.log('duplicate');
}

function Circle(radius){
    this.radius = radius;
}
Circle.prototype=Object.create(Shape.prototype);

Circle.prototype.draw=function(){
    console.log('draw');
}

const h =new Shape();
const e = new Circle(1);