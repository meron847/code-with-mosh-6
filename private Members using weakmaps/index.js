const _radius=new WeakMap();
const _move=new WeakMap();//what we do in move function is we are difineing a method



class Circle{
    constructor(radius){
        _radius.set(this,radius);

        _move.set(this, ()=>{// why  we use arrow function, it inherit with constructor
            console.log('move', this);
        });
    }
    draw(){//we need to call move function which is pravet function in draw function which is public function
        _move.get(this)();

        console.log('draw');
    }
}
const c =new Circle(1);//check it in consol in browser jot down c.draw();
//fainally we can acces all public and pravet object in move function.