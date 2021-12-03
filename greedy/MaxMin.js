//https://www.hackerrank.com/challenges/angry-children/problem
function maxMin(k , arr) {
    const sorted = arr.sort((a,b) => a - b);
    let minUnfare = null;
    for(let i=0; i < arr.length-(k-1); i++) {
             let c = arr[i+k-1] - arr[i]
            if(minUnfare === null || minUnfare >  c) {
                minUnfare = c
            }

    }
    return minUnfare;
}
