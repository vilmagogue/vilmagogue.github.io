function simpleCalculator() {
    //input
    let number1 = parseFloat(document.getElementById('number1').value); 
    let operator = document.getElementById('operators').value;
    let number2 = parseFloat(document.getElementById('number2').value);
    let answer = parseFloat(document.getElementById('myAnswer').value);
	
//apply selection combo box
//apply switch : operator between two numbers
//apply if..else conditions/comparisons
let answerMath;
let message;
switch (operator){

    case '+':
        answerMath == number1 + number2  ;

        if (answer == answerMath){
            message = 'correct!';
        }
    else {
        message = 'incorrect!';
    }
   break;

case  'minus':
    answerMath == number1 - number2;
        if (answer == answerMath) {
            message = 'correct!';
        }
        else {
            message = 'incorrect!';
        }
        break;
case '*':
    answerMath== number1 * number2 ;
        if ( answer == answerMath){
            message = 'correct!';
        }
        else {
            message = 'incorrect!';
        }
        break;
case '/':
    answerMath == number1 / number2;
    if (answer == answerMath){
        message = 'correct!';
    }
    else {
        message = 'incorrect!';
    }
       }

//Output
//Check answer


document.getElementById('output').innerHTML = message;

    
    }


      