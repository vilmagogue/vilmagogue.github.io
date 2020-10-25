function calculate() {
    //input
    let number1 = parseFloat(document.getElementById('number1').value); 
    let operator = document.getElementById(operator).value;
    let number2 = parseFloat(document.getElementById('number2').value);
    let total = parseFloat(document.getElementById('answer').value);
	
//apply selection combo box
//apply switch : operator between two numbers

let total;
let message;
switch (operator) {
    case '+':
     number1 + number2===total;
        if (total === 'answer'){
            answer===total;
        }
            else {
        if (total === number1 + number2){
            message = "Correct! Good Job!";
        } 
        else {
            message != "Incorrect! Try again!";
        }
    }
        break;  

    case '-':
        number1 - number2==total;
        if (total == answer){
            message = "Correct! Good Job!";
        } 
        else {
            message = "Incorrect! Try again!";
        }
        break;
    case '*':
        total == parseFloat(number1 * number2);
        if (total == answer){
            message = "Correct! Good Job!";
        } 
        else {
            message = "Incorrect! Try again!";
        }
        break;
    case '/':
        total == parseFloat(number1 / number2);
        if (total == answer){
            message = "Correct! Good Job!";
        } 
        else {
            message = "Incorrect! Try again!";
        }
        break;  
        default : 'none'       
}


//Output:
//Check answer
document.getElementById('output').innerHTML = `The answer is${message}` ;
}
        