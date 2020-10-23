function footwear() {
    let shoes;
        //input use HTML combo box
        let weather = document.getElementById ('weather').value;
    
        //Processing
   if (weather==="shoes")
		 shoes = weather;
    else {
			
			if (weather ==="hot"){
         shoes = "sandals";
    }
        else {

         if (weather ==="rain") {
                 shoes = "galoshes";
    }

          else {
          
        if (weather==="snow"){
        shoes = "boots";
    }  
 
      else {
          
           shoes = "shoes";
    } 
      }
				}

    //output : Display the right shoes for the weather
					
    document.getElementById('output').innerHTML = 'Have fun wearing ' + shoes   + ' in the '  + weather +  "!";
    }
}


