//
// https://www.hackerrank.com/challenges/mark-and-toys/problem
//

// Mark and Jane are very happy after having their first child. 
// Their son loves toys, so Mark wants to buy some. 
// There are a number of different toys lying in front of him, tagged with their prices. 
// Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money. 
// Given a list of toy prices and an amount to spend, determine the maximum number of gifts he can buy.

// Note Each toy can be purchased only once.


//
// MergeSort Cant be used for this problem memory issue
//
function merge(left, right) {
    let sortedArray = []
    if(left[0] < right[0]) {
        sortedArray.push(left.shift())
    } else {
        sortedArray.push(right.shift())
    }
    return([...sortedArray, ...left, ...right])
}

function mergeSort(array) {
    if(array.length < 2) {return array;}
    const index = Math.floor(array.length/2);
    const left = array.splice(0, index)
    return merge(sort(left), sort(array))
}

//
// Works well with for this problem
//

function quickSort(array) {
    if(array.length < 2) { return array}
    let pivot = array[0]
    let left = []
    let right = []
    for(let i = 1; i < array.length; i++) {
        if(array[i] < pivot) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }
    return([...quickSort(left), pivot, ...quickSort(right)])
}


/*
 * Complete the 'maximumToys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY prices
 *  2. INTEGER k
 */

function maximumToys(prices, k) {
    // const sortedPrices = sort(prices)
    const sortedPrices = quickSort(prices)
    // const sortedPrices = prices.sort((a, b) => {  return a - b;  });
    console.log(sortedPrices)
    let moneyInHand = k;
    let canBuy = 0;
    for(let i=0; i < sortedPrices.length; i++) {
        if(sortedPrices[i] < moneyInHand) {
            canBuy++;
            moneyInHand -= sortedPrices[i]
        } else {
            break;
        }
    }
    return canBuy; 
}