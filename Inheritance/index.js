//prototype is a parent of another object
//objects created by a given constructor will have the same prototype same for arrays 
//every object in js have prototype exept the root object 



//to get prototype of an object.
Object.getPrototypeOf(myObj);

//on browser consol say myObj.__proto__(parent of myObj)
//Constructor.prototype()

function Circle(radius){
    this.radius = radius;
}

Circle.prototype

const circle =new Circle(1);