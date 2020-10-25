function calculate() {
    //input
    let x = parseFloat(document.getElementById('number1').value); 
    let operator = document.getElementById(operator).value;
    let y = parseFloat(document.getElementById('number2').value);
    let total = parseFloat(document.getElementById('answer').value);
	
//apply selection combo box
//apply switch : operator between two numbers

let total;

switch (operator) {
  
    case '+':
 total== parseFloat(x + y);
       
        break;  
    
    case '-':
total == parseFloat(x - y);
       
        break;
        
    case '*':
    total ==  parseFloat(x * y);
        
        break;
    case '/':
total == parseFloat(x / y);
       
        break;  
        default : 'none'       
}
let message;
if (total == answer) {
    message = "Correct! Good Job";
} 
else {
    message = "Incorrect! Try again";
}

//Output

//Check answer


document.getElementById('output').innerHTML = message ;
}
        