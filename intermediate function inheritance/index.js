function Shape(color){
 this.color = color;
}
Shape.prototype.duplicate= function(){
    console.log('duplicate');
}
//this extend function what we call intermidiate function inheritance
function extend(Child, Parent){
    
    Child.prototype=Object.create(Parent.prototype);
    Child.prototype.constructor = Circle;
}

function Circle(radius, color){
    Shape.call(this, color);

    this.radius = radius;
}

Circle.prototype.draw=function(){
    console.log('draw');
}
//now we want square function inherit from shape function.
//jot down in console tab const sq = new Square(10); and then 'sq'
function Square(size){
    this.size = size;
}
extend(Square, Shape)

const s =new Shape();
const c = new Circle(1, 'red');