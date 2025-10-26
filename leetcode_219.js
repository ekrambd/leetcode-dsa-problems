//219. Contains Duplicate II

var containsNearbyDuplicate = function(nums, k){
    let map = new Map();
    let diff;
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
           let lastIdx = map.get(nums[i]);
           diff = i - lastIdx;
           if(diff <= k){
              return true;
           }
        }
        map.set(nums[i],i);
    }
    return false;
};

console.log(containsNearbyDuplicate([1,2,3,1],3));
console.log(containsNearbyDuplicate([1,0,1,1],1));
console.log(containsNearbyDuplicate([1,2,3,1,2,3],2));