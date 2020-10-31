function calculator() {
    //input
    let number1 = parseFloat(document.getElementById('number1').value); 
    let operators = (document.getElementById('signOperators').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let check = parseFloat(document.getElementById('myAnswer').value);
	
       
//apply selection combo box
//apply switch : operator between two numbers
//apply if..else conditions/comparisons
let calculate;
switch (operators){

case '+':
        calculate = number1 + number2  ;
   break;
case  '-':
    calculate = number1 - number2;
        break;
case '*':
    calculate = number1 * number2 ;
        break;
case '/':
    calculate = number1 / number2;
        break;
    }

let message;


    if ( check ==calculate) {
        message = 'It is 🏆 🏆correct!';
    }

    else {
           
         message = 'It is 😥 incorrect! Try Again!';
    }
  
//Output
//Check answer

document.getElementById('output').innerHTML = message;
}

