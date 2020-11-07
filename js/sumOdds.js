function runFunction() {
    //control variable
    //determine initializer or the starting point
    //set conditions on how or when the loops end
    // loops incrementer and discrementer
    // var total as a collector

    let n = document.getElementById('upperValue').valaue; 
   var total = 0;
 
    for ( var i = 1 ; i < 11 ; i = i +4){
 

       total = total + i;
        } 
    
    document.getElementById('output').textContent = 'The total sum is :' + total + '!';
    
    }