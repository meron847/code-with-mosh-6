const _radius = new WeakMap();

class Circle {
    constructor(radius){
        _radius.set(this, radius);
    }

    get radius(){
        return _radius.get(this);
    }

    set radius(value){
       if (value <=0)throw new Error('invalid radius')
        _radius.set(this, value);
    }
}
const c = new Circle(1);//check in the console jot down c.radius,and the you can change the value by using c.radius=9