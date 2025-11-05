//442. Find All Duplicates in an Array

var findDuplicates = function(nums){
    let map = new Map();
    let results = [];
    for(let i = 0; i < nums.length; i++)
    {
        if(map.has(nums[i]) && !results.includes(nums[i]))
        {
            results.push(nums[i]);
        }
        map.set(nums[i],i);
    }
    if(results.length) results.sort((a,b)=>a-b);
    return results;
};

console.log(findDuplicates([4,3,2,7,8,2,3,1]));
console.log(findDuplicates([1,1,2]));
console.log(findDuplicates([1]));