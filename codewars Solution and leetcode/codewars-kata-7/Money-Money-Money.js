//https://www.codewars.com/kata/563f037412e5ada593000114 (link)



/*
Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

Note to Tax: not the invested principal is taxed, but only the year's accrued interest

Example:

  Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00

After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30
*/

function calculateYears(p, i, t, d) {
  let years = 0;
  while (p < d) {
    let interestEarned = p * i;
    let taxOnInterest = interestEarned * t;
    p += interestEarned - taxOnInterest;
    years++;
  }
  return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));
