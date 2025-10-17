//121. Best Time to Buy and Sell Stock

var maxProfit = function(prices) {
    let buy = prices[0];
    let maxProfit = 0;
    for(let i = 1; i < prices.length; i++){
        if(prices[i] < buy){
            buy = prices[i];
        }else{
            let profit = prices[i] - buy;
            maxProfit = Math.max(profit,maxProfit);
        }
    }
    return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));