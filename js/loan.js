function doPayment ( ){
    let principal = parseFloat(document.getElementById('principal').value);
    let intRate = parseFloat(document.getElementById('annualRate').value);
    let ppy = parseFloat(document.getElementById('periodsPerYear').value);
    let yRs = parseFloat (document.getElementById("years").value); 
    document.getElementById("output1").innerHTML = computePayment (principal, intRate, ppy, yRs);
}

function computePayment(a, r, n, yRs) {
     
    // Formula to compute payment: p = ar/1-(1+r)^-n;
    //Where p = is the payment per period, a = is the loan amount, r = is the interest rate per period, 
    // yRs = number of years and n = is the total number of periods per year.
    p = a * (r/n) / (1 - ((1 + (r/n))**(-n*yRs)));
   
   //ComputePayment function computes and returns the monthly payment for a loan with a fixed annual interest rate.
    return p;
}

function doBalance () {
    let principal = parseFloat(document.getElementById('principal').value);
    let intRate = parseFloat(document.getElementById('annualRate').value);
    let ppy = parseFloat(document.getElementById('periodsPerYear').value);
    
    let numPMT = parseFloat(document.getElementById("paymentPerPeriod")) 
    document.getElementById('output2').innerHTML = computeBalance (principal, intRate, ppy, numPMT);
}

function computeBalance (a, r, n, numPMT, p,yRs) {
//Compute the balance of a loan after the payments have been made
//Formula to compute balance payment: b = a ( 1 + r )^d - p((1 + r )^d - 1 / r)
//Where b = is the balance or payoff amount, a = is the loan amount, r = is the interest rate per period,
 // n = is the period per period, and d = is the number of payments paid to date.
b = (a * (1 + (r/n))**numPMT) - a * (r/n) / (1 - ((1 + (r/n))**(-n*yRs))) * (( 1 + (r/n))**numPMT - 1) / (r/n);

//The computeBalance function computes and returns the balance for a loan with a fixed annual interest rate. 


return b;

}





