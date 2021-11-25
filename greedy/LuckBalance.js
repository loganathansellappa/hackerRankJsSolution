//https://www.hackerrank.com/challenges/luck-balance/problem
/*
 * Complete the 'luckBalance' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. 2D_INTEGER_ARRAY contests
 */
function luckBalance(k, contests) {
   let luck = 0;
   let winScore = 0;
   contests.filter(a => a[1] === 0).forEach(a => luck = luck + a[0])
   const importantContest = contests.filter(a => a[1] === 1).sort((a, b) => a[0] - b[0])
   for(let i=importantContest.length-1; i >= 0; i--) {
       if(k > 0) {
           luck = luck + importantContest[i][0]
           k--
       } else { 
           winScore = winScore + importantContest[i][0]
       }
    }
   return luck - winScore
}
