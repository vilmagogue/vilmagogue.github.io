function calculate() {
    //input
    let number1 = document.getElementById('number1').value; 
	
    
    let number2 = document.getElementById('number2').value;
	
    let answer = document.getElementById('answer').value;
	
//apply selection combo box
//apply switch operator between two numbers
	
let total;
let message;
  switch ('operators') {
  
		case '+':
			total==number1 +  number2 ; 
		case 'message':
			message == correct;
    message != incorrect;
    
			
       break; 
case  '-'  :
    total == number1 - number2;
        message == "correct";
        message !== "incorrect";
        break;
case  '*'  :
    total == number1 * number2;
        message == "correct";
        message !== "incorrect";
        break;  
case  '/'  :
    total == number1 / number2;
        message == "correct";
        message !== "incorrect";
        break; 
                
default:
     answer == "none"; 
  }

//output
document.getElementById('output').innerHTML = 'The answer is ' + total + + message +  "!";
}

