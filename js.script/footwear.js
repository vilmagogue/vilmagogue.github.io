function footwear() {
	 let shoes;
        //input use HTML combo box
        let weather = document.getElementById ('weather').value;
    
        //Processing
    let shoes;
    if (weather === 'hot'){
         shoes = sandals;
    }
        else {

         if (weather ==='rain') {
                 shoes = boots;
    }
          else {
          
        if (weather==='snow'){
        shoes = galoshes;
    }   
      else {
          
          if  (weather==='unknown'){
          shoes = unknown;
    } 

    }
} 
    //output : Display the right shoes for the weather
    document.getElementById('output').innerHTML = 'Have fun wearing' + shoes + "+"  + "!";

    }
        
   
}