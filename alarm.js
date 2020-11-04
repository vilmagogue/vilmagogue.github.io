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
       
if (month==0||dayOfMonth==1||month==6||dayOfMonth==4||month==11||dayOfMonth==25||dayOfWeek==5||dayOfWeek==6||dayOfWeek==0){
        message= 'sleepin';

}
else if (dayOfWeek==1||dayOfWeek==2||dayOfWeek==3||dayOfWeek==4||dayOfWeek==5){
        message = 'Get Up!';
}  
else{
        message = 'Get Up!';
}   
        

    //output
//get the right message :sleepin || get up
document.getElementById('output').innerHTML = message ;

}



