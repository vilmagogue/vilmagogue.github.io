function calculate() {
    //input
    let num1 = parseFloat(document.getElementById('number1').value); 
    let operator = document.getElementById(operator).value;
    let num2 = parseFloat(document.getElementById('number2').value);
    let answer = parseFloat(document.getElementById('answer').value);
	
//apply selection combo box
//apply switch : operator between two numbers

let answer;
let message;
switch (operator) {
    case '+':
        answer == num1 + num2;
        if (answer == 'answer'){
            message == "Correct! Good Job!";
        } 
        else {
            message !== "Incorrect! Try again!";
        }
    
        break;  
    
    case '-':
        answer == num1 - num2;
        if (answer == 'answer'){
            message == "Correct! Good Job!";
        } 
        else {
            message !== "Incorrect! Try again!";
        }
        break;
        
    case '*':
        answer == num1 * num2;
        if (answer == answer){
            message == "Correct! Good Job!";
        } 
        else {
            message !== "Incorrect! Try again!";
        }
        break;
    case '/':
        answer == num1/ num2;
        if (answer == answer){
            message == "Correct! Good Job!";
        } 
        else {
            message !== "Incorrect! Try again!";
        }
        break;  
        default : 'none'       
}


//Output:
//Check answer
document.getElementById('output').innerHTML = message ;
}
        