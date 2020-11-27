function doFV () {
    let principal = parseFloat(document.getElementById('principalAmount').value);
    let rate = parseFloat(document.getElementById('annualRate').value);
    let numYears= parseFloat(document.getElementById('numberYears').value);
    let ppy= parseFloat(document.getElementById('periodPerYear').value);

    document.getElementById('output').innerHTML = "The future value is " + computeFutureValue (principal, rate, numYears, ppy ) 
     + " for 10 years " + "!";
}
function computeFutureValue( a, r, n, y ) {

//The formula for computing the future value of an investment is
// f = a * (1 + r)^y;
//Compute the future value for 10 years ; 4 period per year;
// where : a - principalAmount; r - annualRate; y - numberYears; n - periodPerYear
f = (a * (( 1 + (r/y))**(n*y))).toFixed(2);
return f;
}