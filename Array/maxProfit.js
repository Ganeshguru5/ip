var maxProfit = function(prices) {
  let min = prices[0]
  let maxprofit = 0
  for(let i = 1; i<prices.length; i++) {
    if(prices[i] < min) {
      min = prices[i]
    } else {
      maxprofit = Math.max(maxprofit, prices[i] - min)
    }
  }
  return maxprofit
}

console.log(maxProfit([7,1,5,3,6,4]))