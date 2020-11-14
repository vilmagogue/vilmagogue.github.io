function logicSolutions() {

        //input extract the dayOfWeek from the alarm clock
       
        var dayOfWeek = new Date().getDay();
        let tueSub = 37.00;
        let satSub = 53.25;
       
        
        //Process
        //get the subtotal output for  Wednesday to get a customer discount
        //If statements-to compare sales is greater than $50/substractig 10 % and add 6% to the subtotal
       
        let message;
        if ( tueSub > 50 &&  dayOfWeek ==2 || satSub > 50 && dayOfWeek == 6 ){
                discount = '50.80';
        }
         else {
                discount = '.10' ;
}
       
document.getElementById('output').innerHTMl = message + '50.80' + '!';
        
        }
        
        