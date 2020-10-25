function simpleCalculator() {
    //input
    let number1 = parseFloat(document.getElementById('number1').value); 
    let operator = document.getElementById('operators').value;
    let number2 = parseFloat(document.getElementById('number2').value);
    let answer = parseFloat(document.getElementById('myAnswer').value);
	let answerMath;
    let message;    
//apply selection combo box
//apply switch : operator between two numbers
//apply if..else conditions/comparisons

switch (operator){

    case 'add':
        answerMath == number1 + number2  ;
   break;
case  'minus':
    answerMath == number1 - number2;
        break;
case 'multiply':
    answerMath== number1 * number2 ;
        break;
case 'divide':
    answerMath == number1 / number2;
        break;
    }


    if (answer== number1+number2){
        message = 'It is 🏆 🏆correct!';
    }
            else {
            message = 'It is 😥 incorrect! Try Again!';
    }
   
//Output
//Check answer


document.getElementById('output').innerHTML = message;

    
    }


      