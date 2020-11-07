function runFunction() {
    //control variable
    //determine initializer or the strting point
    //set conditions on how or when the loops end
    // loops incrementer and discrementer
    // var total as a collector

    let n = document.getElementById('upperValue').valaue; 
   var total = '0';
 
    for ( var i = 1 ; i < 10 ; i = i +=2){
    if ( i % 2 !==0){
       total = total + i;
        } 
    }
    document.getElementById('output').textContent = 'The total sum is: ' + total;
    
}