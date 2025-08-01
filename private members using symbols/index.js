const _radius=Symbol();//those two line are not a constructur function and this two line are used two pravate radius,draw object
const _draw=Symbol();

class Circle{
    constructor(radius) {
        this[_radius]=radius;//this line refer a symbole not object radius
       /* this.radius=radius;
        this['radius']=radius  this two line are the same but theye referce an object radius*/
    }
    [_draw](){

    }
}
const c = new Circle(1);