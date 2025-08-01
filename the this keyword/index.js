
'use strict';//this line prevent us accidentaly change the global object 
//modern way to use this key word
class Circle{
    draw(){
        console.log(this);
    }
}

const c = new Circle();
const draw=c.draw;
draw();
//same out put but d/f code 
/*
'use strict';

const Circle = function(){
   this.draw = function(){console.log(this);}
};

const c =new Circle();
//Method Call
c.draw();

const draw = c.draw;
//Function Call
draw();*/