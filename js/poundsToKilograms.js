function poundsToKilograms() {

    // Input
         let pounds = parseFloat(document.getElementById('pounds').value);

    //Processing   
    //Convert pounds to kilograms using formula
    
        let kilograms =  pounds * 0.45359237;
        
     //Output      
    // Display the converted weight in kilogram.
        document.getElementById('output').innerHTML =  ` ${kilograms.toFixed(1)} kilograms!` ;
}
