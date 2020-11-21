function doInputOutput() {
    // do the input and output
    // get a temperature from the first text field and store the value into a variable named temperature
    // get a wind speed from the second text field and store the value into a variable named windspeed
    
    let tempF = parseInt(document.getElementById('temperature').value);
    let windSpeed = parseInt(document.getElementById('windSpeed').value);
document.getElementById('output').innerHTML = windChill  (tempF, windSpeed);

}
 
 function windChill ( tempF, windSpeed){
     // take a temperature in Fahrenheit as a parameter (tempF)
 // take a wind speed in miles per hour as a parameter (windSpeed)
  
 //Processing: calculate the wind chill factor as a temperature in Fahrenheit  
  
  f = 35.74 + (0.6215 * tempF)- (35.75 * windSpeed ** 0.16) + (0.4275 * tempF * windSpeed ** 0.16);
 
 // return the wind chill factor in Fahrenheit

     return f;
 
  }
    