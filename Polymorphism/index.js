//polymorphism is many forms
function Shape(){
}

Shape.prototype.duplicate = function(){
    console.log('duplicate');
}

function Circle(){

}

extend(Circle, Shape);

Circle.prototype.duplicate= function(){
    console.log('duplicate circle');
}

function Square(){

}

extend(Square,Shape);

Square.prototype.duplicate= function(){
    console.log('duplicate Square');
}

const  shapes=[
    new Circle(),
    new Square()
];

for (let shape of shapes)
    shape.duplicate();
// 


