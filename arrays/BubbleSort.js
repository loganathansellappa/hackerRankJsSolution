/*
 * Complete the 'countSwaps' function below.
 *
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function countSwaps(a) {
    let swaps = 0
   for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j+1]] = [a[j+1], a[j]]
                swaps++
            }
        }
    }
}