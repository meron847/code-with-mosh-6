 
 //if we need to create  2 circle we donot duplicate the first code, we use constructur fanction or factorial function.
 
 function createCircle(radius){
      return {
        radius,
        draw: function() {
            console.log('draw');
        }
      };
      
}
const circle1=createCircle(2);//1 is for radius and this function is factory function
const circle2=createCircle();//1 is for radius and this function is factory function

 circle1.draw();
 circle2.draw();
 
 console.log(circle1);
 console.log(circle2);