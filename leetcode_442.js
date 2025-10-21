//442. Find All Duplicates in an Array

var findDuplicates = function(nums){
    class HashMap{
        constructor(){
            this.map = new Map();
        }
        set(key,value){
            this.map.set(key,value);
        }
        get(key){
            return this.map.has(key)?this.map.get(key):null;
        }
        has(key){
            return this.map.has(key);
        }
    }
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        let count = map.get(nums[i]);
        if(count == null){
            map.set(nums[i],1);
        }else{
            map.set(nums[i],count+1);
        }
    }
    let results = [];
    for(let i = 0; i < nums.length; i++){
        let count = map.get(nums[i]);
        if(count > 1){
            if(!results.includes(nums[i]))
            {
                results.push(nums[i]);
            }
            
        }
    }
    if(results.length > 0) results.sort((a,b)=>a-b);
    return results;
};
console.log(findDuplicates([4,3,2,7,8,2,3,1]));
console.log(findDuplicates([1,1,2]));
console.log(findDuplicates([1]));