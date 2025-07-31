function mixin(target, ...sources){
    Object.assign(target, ...sources);
}


const canEat ={
    eat:function(){
        this.hunger--;
        console.log('eating');
    }
};

const canWalk={
    walk: function(){
        console.log('walking');
    }
};

const canSwim ={
    swim: function(){
        console.log('swim');
    }
};

function Person(){}

   Object.assign(Person.prototype, canEat, canWalk);//Object assign property used to compose one object to another object,object assign is similat to mixin function we can change object assign to mixin  

   const person=new Person();
  console.log(person);

  function Goldfish(){

  }
  mixin(Goldfish.prototype, canEat,canSwim)

  const goldfish = new Goldfish();
  console.log(goldfish);