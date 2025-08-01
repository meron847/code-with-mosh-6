//in classical object orented languages we have two methods  static methods and  instance Method
class Circle{
    constructor(radius){
        this.radius=radius;
    }
    //instance Method
    draw(){

    }
}

const circle=new Circle(1);
console.log(circle);

//static methods
class Meth2{
    static abs(value){

    }
}
Meth2.abs()