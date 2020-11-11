function fiveTimes() {
    //display table using control variable
    // apply multiplication operator 
    
     
     var results ="";
     let i = 0;
 
     for ( i = 0 ; i <= 12; i+1){
         results +=  i + " ✖️ " + 5 + ' = '  + i * 5 + '<br>';
     
         i++;
 
     }
     document.getElementById('output').innerHTML = results;
 }