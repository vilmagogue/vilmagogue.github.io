function customerSubtotal() {
//input Set 
let logic =document.getElementByIdlementById('logicalInput').value;
var dayOfWeek = new Date().getDay();
var subtotal1 = 53.25 ;
var subtotal2 = 25.95;
var y = 100% - 10% tax;
var x = 100% + 6% tax;

//Process
//compute sales for Tuesday and Wednesday-lowest day of sales
//If statements-to compare sales is greater than $50/adding/substract 10 % and add 6% to the subtotal

let message;
if ( dayOfWeek =='Monday (1)' || dayOfWeek == 'Tuesday (2)' || dayOfWeek == 'Wednesday (3)' || dayOfWeek == 'Thursday (4)'  || 
        dayOfWeek == 'Friday (5)' || dayOfWeek == 'Saturday (6)' || dayOfWeek == 'Sunday(7)') {
       message= 'number of days';
        }  

else if (subtotal2< $50 && today == 'Tuesday(2)'|| subtotal1 > $50y  && today =='Wednesday(3)'){
        
        message = 'no discount';
}
   else if (subtotal > $50 && today =='Wednesday(3)' || subtotal * .90 * 1.06 == 'logicalInput') {
message = "The Customer's subtotal discount with additional tax is $50.80";
}

else {

 
        message = "no discount";
        }
        
document.getElementById('output').innerHTML = message ;

}


