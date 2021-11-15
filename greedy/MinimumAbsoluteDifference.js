//
// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms
//

function minimumAbsoluteDifference(arr) {
   arr.sort((a,b) => a-b)
    let min = Infinity
    for(let i=0; i < arr.length - 1; i++) {
        let diff = Math.abs(Math.min(arr[i] - arr[i+1]))
        if (diff < min) {  min = Math.min(min, diff) }
    }
    return min
}