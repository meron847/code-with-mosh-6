 //Fuctory function
 function createCircle(radius){
      return {
        radius,
        draw: function() {
            console.log('draw');
        }
      };
      
}
const circle1=createCircle(1);

//Constructor function

 function Circle(radius){
      
       this.radius;
        this.draw= function() {
            console.log('draw');
        }
      
      
}
const another = new Circle(1);//this new create an empty object {}
another.draw();


