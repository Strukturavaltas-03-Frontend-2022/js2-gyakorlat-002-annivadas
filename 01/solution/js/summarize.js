const summarize = (...numbers) => {
   let sum = 0;
   numbers
     .map((num) => (num === Math.trunc(num) ? num : 0))
     .map((num) => {
       num > Number.MAX_SAFE_INTEGER || sum > Number.MAX_SAFE_INTEGER
         ? (sum = BigInt(sum) + BigInt(num))
         : (sum += num);
     });
 
   return sum;
 };

 export default summarize;





