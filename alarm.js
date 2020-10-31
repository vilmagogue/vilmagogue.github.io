function myAlarm() {
//input 
// all input from computer's clock 

let now = new Date();
let month = now.getMonth();
let dayOfMonth = now.getDate();
let dayOfWeek = now.getDay();
    //Process 
    //&& - And Operator - Both sides to be true
    //|| - OR Operator - One side needs to be true (choices given and one side could be false)
    
let message;
       
if (month == 'January(0)' || month == 'March(2)'   || month == 'May(4)'  || month == 'July(6)' ||  month == 'August(7)'  
|| month == 'October(9)'  || month == 'December(11)'){
message = '31 days';
}

else if (month == 'April(3)' || month == 'June(5)' || month == 'September(8)'  || month == 'November(10)' ){
message = '30 days';
}
else if (dayOfMonth =='31 days' || dayOfMonth =='30 days'){
message = 'number of days';
}
else{

( month == 'February(1)');
message ='28 days'
}
       
        if ( dayOfWeek =='Monday (1)' || dayOfWeek == 'Tuesday (2)' || dayOfWeek == 'Wednesday (3)' || dayOfWeek == 'Thursday (4)'  || 
        dayOfWeek == 'Friday (5)' || dayOfWeek == 'Saturday (6)' || dayOfWeek == 'Sunday (0)') {
             message= 'Weekdays'; 
}

        if (now == '31' && month == '(9)' && dayOfWeek == '(6)'|| now == '(1)'  && month == '(10)' && dayOfWeek == '(0)')  { 
              message = 'Sleep in!';
        }
        else {
                if ( now == '1' && month =='(0)' && dayOfWeek == '(4)' || now == '4' && month == '(6)'&& dayOfWeek == '(0)' 
                && now == '25' && month == '(11)'&& dayOfWeek == '(6)'){
                
                 message = 'sleepin!';
      
        }

        else{

         now =='2' && month == '(10)' && dayOfWeek == '(1)'|| now == '3' && month == '(10)'&& dayOfWeek == '(2)'|| now == '4' && month =='(10' && dayOfWeek == '(3)'
                ||now == '5' && month == '(10)' && dayOfWeek == '(4)' || now =="6" && month == '(10)' && dayOfWeek == '(5)';

                
                message = 'Get Up!';
}
}     
        

    //output
//get the right message :sleepin || get up
document.getElementById('output').innerHTML = message ;

}



