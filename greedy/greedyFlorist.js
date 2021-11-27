//https://www.hackerrank.com/challenges/greedy-florist/problem
// Complete the getMinimumCost function below.

function getMinimumCost(peopleCount, cost) {
   
    let purchaseHisory = {}
    for(let i = 0; i < peopleCount; i++) { purchaseHisory[i] = 0}
    
    let currentPurchase = peopleCount;
    if(peopleCount === cost.length) {
        return cost.reduce((pv, cv) => pv+cv, 0)
    } else {
         let sum = 0
        const sortedFlowers = cost.sort((a, b) => (a > b ? -1 : 1))
        sortedFlowers.forEach(flower => {
            let lowestPurchaseCount = Math.min(...Object.values(purchaseHisory))
        let personCanBuy = Object.keys(purchaseHisory).find(ppl => purchaseHisory[ppl] === lowestPurchaseCount)
            sum += ((lowestPurchaseCount +1) * flower)
            purchaseHisory[personCanBuy] = purchaseHisory[personCanBuy]+1
        })
        return sum;
    }
}



// Optimal approach O(N log N)
// Complete the getMinimumCost function below.
function getMinimumCost(peopleCount, cost) {
    if(peopleCount === cost.length) {
        return cost.reduce((pv, cv) => pv+cv, 0)
    } else {
        let sum = 0
        const sortedFlowers = cost.sort((a, b) => (a > b ? -1 : 1))
         for (let i = 0; i < sortedFlowers.length; i++) {
            sum += (Math.floor(i/peopleCount) +1) * sortedFlowers[i];
        };
       return sum;
    }
}