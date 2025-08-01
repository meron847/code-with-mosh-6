class Shape{
    constructor(color){
        this.color = color;
    }
    move(){
        console.log('move');
    }
}
class Circle extends Shape{//extends property is used for inheritance
    constructor(color, radius){
        super(color);//we can use the super key word to reference the parent object
        this.radius = radius;
    }
    draw(){

        console.log('draw');
    }
}
const c = new Circle('blue',9)