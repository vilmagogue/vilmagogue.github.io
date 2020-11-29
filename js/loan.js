function doPayment ( ){
    let principal = parseFloat(document.getElementById('principal').value);
    let intRate = parseFloat(document.getElementById('annualRate').value);
    let ppy = parseFloat(document.getElementById('periodsPerYear').value);
    let yRs = parseFloat (document.getElementById("years").value); 
    document.getElementById("output1").innerHTML = computePayment (principal, intRate, ppy, yRs);
}

function computePayment(a, r, n, y) {
     
    // Formula to compute payment: p = ar/1-(1+r)^-n;
    //Where p = is the payment per period, a = is the loan amount, r = is the interest rate per period, 
    // y = number of years and n = is the total number of periods per year.
    p = a * (r/n) / (1 - ((1 + (r/n))**(-n*y)));
   
   //ComputePayment function computes and returns the monthly payment for a loan with a fixed annual interest rate.
    return p;
}

function doBalance () {
    let principal = parseFloat(document.getElementById('principal').value);
    let intRate = parseFloat(document.getElementById('annualRate').value);
    let ppy = parseFloat(document.getElementById('periodsPerYear').value);
    let yRs = parseFloat (document.getElementById("years").value); 
    let numPMT = parseFloat(document.getElementById("paymentPerPeriod").value); 
    
    document.getElementById('output2').innerHTML = computeBalance (principal, intRate, ppy, yRs, numPMT);
}

function computeBalance (a, r, n, d, y) {
//Compute the balance of a loan after the payments have been made
//Formula to compute balance payment: b = a ( 1 + r )^d - p((1 + r )^d - 1 / r)
//Where b = is the balance or payoff amount, a = is the loan amount, r = is the interest rate per period,
 // 12 = is the period per period, and d = is the number of payments paid to date.
 //payment per period formula is applied : a * (r/n) / (1 - ((1 + (r/n))**(-n*y)))

 b = (a * (1 + (r/d))**y) - a * (r/n) / (1 - ((1 + (r/n))**(-n*y))) * (( 1 + (r/d))**y - 1) / (r/d);

//The computeBalance function computes and returns the balance for a loan with a fixed annual interest rate. 


return b;

}





