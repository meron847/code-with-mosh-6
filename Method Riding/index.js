
//imagin we want to reuse some of the code implimented in parents move methode in that case we can call that the super key worde.
class Shape{
    move(){
        console.log('move');
    }
}

class Circle extends Shape{
    move(){
        super.move();
        console.log('circle move');
    }
}

const c =new Circle();//check it in console tab c.move(),c
