function logicalSolutions() {
        
        //input extract the dayOfWeek from the alarm clock
       let subtotal = parseInt(document.getElementById('subtotalnput').value);
       var discount = .006;
        let message;

        //Process
        //get the subtotal output for  Wednesday to get a customer discount
        //If statements-to compare sales is greater than $50/substractig 10 % and add 6% to the subtotal
        
     
        
         if (subtotal > 53.25 && dayOfWeek == 3||subtotal > 50 && dayOfWeek ==2) {
                 discount = '.10';
         }  
         
         else{
                 discount = '.10';
         }
        
        document.getElementById('output').innerHTMl = message + 'The subtotal amount of Customer discount with additional tax is 50.80' + subtotal +  "!";
        
        }
        
        