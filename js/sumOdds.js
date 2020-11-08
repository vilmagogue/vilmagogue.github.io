function runFunction() {
    //control variable
    //determine initializer or the starting point
    //set conditions on how or when the loops end
    // loops incrementer and discrementer
    // var total as a collector

    let n = document.getElementById('upperValue').value; 
   var total = 0;
 
    for ( var i = 1 ; i <= n ; i = i+2){
 

       total = total + i;
       
        } 
    
    document.getElementById('output').textContent = 'The total sum is: ' + total + '!';
    
    }