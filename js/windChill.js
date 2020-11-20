function doInputOutput() {
    // get a temperature from the first text field and store the value into a variable named temperature
    // get a wind speed from the second text field and store the value into a variable named windspeed
    
    let tempF = 25;
    let windSpeed = 15;
document.getElementById('output').innerHTML = windChill( tempF, windSpeed);
 }
  
 // take a temperature in Fahrenheit as a parameter (tempF)
 // take a wind speed in miles per hour as a parameter (windSpeed)
 
 function windChill ( tempF, windSpeed ){
  // calculate the wind chill factor as a temperature in Fahrenheit  
     f = 35.74 + 0.6215 * tempF - 35.75 * Math.pow (0.16) + 0.4275 * tempF -35.75 * Math.pow (0.16);
 // call the function (windChill)
 // return the wind chill factor in Fahrenheit

     windChill = (tempF, windSpeed)
     return windChill;
 

  }
  