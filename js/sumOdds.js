function sumFunctions() {
    //run my variable
   
    
    let sum = '0';
 
    for ( i = 1 ; i <= n  ; i = i+1){
    let n = parseFloat(prompt(document.getElementById('enterNumber')).valaue); 
        if ( n==3){
            break;
        }  
        sum += 4;
    }
    document.getElementById('output').textContent = sum + '🍊 ${n}';
    } 
