function logicalSolutions() {
        
        //input extract the dayOfWeek from the alarm clock
        let subtotal =parseFloat(document.getElementById('subtotalInput').value);
        var dayOfWeek = new Date().getDay();
        let message;
        
        //Process
        //get the subtotal output for  Wednesday to get a customer discount
        //If statements-to compare sales is greater than $50/substractig 10 % and add 6% to the subtotal
        
                
        
         if (subtotal <= 50 && dayOfWeek == 2 || subtotal >= 50 || dayOfWeek == 3) {
                 discount = '.10';
         }  
         
         else{
                 discount = '50.80';
         }
        
        document.getElementById('output').innerHTMl = 'The subtotal amount of Customer discount with additional tax is 50.80' + message  + "!";
        
        }
        
        