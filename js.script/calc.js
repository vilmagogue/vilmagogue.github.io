function calculator() {
    //input
    let number1 = parseFloat(document.getElementById('number1').value); 
    let operators = (document.getElementById('signOperators').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let check = parseFloat(document.getElementById('myAnswer').value);
	let calculate;
       
//apply selection combo box
//apply switch : operator between two numbers
//apply if..else conditions/comparisons

switch (operators){

case '+':
        calculate == parseFloat(number1 + number2)  ;
   break;
case  '-':
    calculate == parseFloat(number1 - number2);
        break;
case '*':
    calculate== parseFloat(number1 * number2) ;
        break;
case '/':
    calculate == parseFloat(number1 / number2);
        break;
    }

let message;
switch (operators) {
case '+':

    if (check == parseFloat(number1 + number2)) {
        message = 'It is 🏆 🏆correct!';
    }

    else {
           
         message = 'It is 😥 incorrect! Try Again!';
    }
  case '-'  :

    if (check == parseFloat(number1 - number2)) {
        message = 'It is 🏆 🏆correct!';
    }

    else {
           
         message = 'It is 😥 incorrect! Try Again!';
    }
    case '*':
        if (check == parseFloat(number1 * number2)) {
            message = 'It is 🏆 🏆correct!';
        }
    
        else {
               
             message = 'It is 😥 incorrect! Try Again!';
        }  
        case '/':
            if (check == parseFloat(number1 / number2)) {
                message = 'It is 🏆 🏆correct!';
            }
        
            else {
                   
                 message = 'It is 😥 incorrect! Try Again!';
            }  
}
//Output
//Check answer

document.getElementById('output').innerHTML = message;
}


      