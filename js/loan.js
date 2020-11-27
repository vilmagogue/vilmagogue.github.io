function doPayment ( ){
    let principal = parseFloat(document.getElementById('principal').value);
    let intRate = parseFloat(document.getElementById('annualRate').value);
    let ppy = parseFloat(document.getElementById('periodsPerYear').value);
    let yRs = parseFloat (document.getElementById("years").value); 
    document.getElementById("output1").innerHTML = computePayment (principal, intRate, ppy, yRs);
}

function computePayment(a, r, n) {
     
    // Formula to compute payment: p = ar/1-(1+r)^-n;
    //Where p = is the payment per period, a = is the loan amount, r = is the interest rate per period, 
    // and n = is the total number of periods throughout the life of the loan.

    p = a *  r / (1  - ( 1 + r ) ** (-n));
    
   //ComputePayment function computes and returns the monthly payment for a loan with a fixed annual interest rate.
    return p;
}

function doBalance () {
    let principal = parseFloat(document.getElementById('principal').value);
    let intRate = parseFloat(document.getElementById('annualRate').value);
    let ppy = parseFloat(document.getElementById('periodsPerYear').value);
    let yRs = parseFloat (document.getElementById("years").value); 
    let numPMT = parseFloat(document.getElementById("numberOfPMTpaidToDate")) 
    document.getElementById('output2').innerHTML = computeBalance (principal, intRate, yRs, ppy, numPMT);
}

function computeBalance (a, r, d, p,) {
//Compute the balance of a loan after the payments have been made
//Formula to compute balance payment: b = a ( 1 + r )^d - p((1 + r )^d - 1 / r)
//Where b = is the balance or payoff amount, a = is the loan amount, r = is the interest rate per period,
 // p = is the payment per period, and d = is the number of payments paid to date.
 
b = (a * (( 1 + r )) ** d) - (p * (( 1 + r ) ** d - 1)) / r;
//The computeBalance function computes and returns the balance for a loan with a fixed annual interest rate. 

return b;

}






