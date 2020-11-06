function runFunctions() {
    //run my variable
   
    let message =""; 
    let sum = '0';
 
    for ( i = 0 ; i < 10  ; i++){
    let n = parseFloat(prompt(document.getElementById('enterNumber')).valaue); 
        if ( n==0){
            break;
        }  
        sum += n;
    }
    document.getElementById('output').textContent = message + '🍊 ${n}<br>';
    } 
