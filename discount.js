function logic() {
//input extract the dayOfWeek from the alarm clock

var dayOfWeek = new Date().getDay();


//Process
//get the subtotal output for  Wednesday to get a customer discount
//If statements-to compare sales is greater than $50/substractig 10 % and add 6% to the subtotal
let message = x + 'is the customer total discount with additional tax!'  ;



if ( dayOfWeek =='Monday' || dayOfWeek == 'Tuesday' || dayOfWeek == 'Wednesday' || dayOfWeek == 'Thursday'  || 
        dayOfWeek == 'Friday' || dayOfWeek == 'Saturday' || dayOfWeek == 'Sunday') {
       daysOfTheweek = 'number of days';
        }  
let message;
        

 if (subtotal > 50 && today == 'Tuesday' || today == 'Wednesday') {
         discount = 53.25 - 10% + 6% + 'The subtotal amount of Customer discount with additional tax is 50.80';
 }  
 else{
         discount = 0;
 }
 
document.getElementById('output').innerContent = message ;

}


