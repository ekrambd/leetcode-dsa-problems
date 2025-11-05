//268. Missing Number

var missingNumber = function(nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], true);
  }
  for (let i = 0; i <= nums.length; i++) {
    if (!map.has(i)) {
      return i;
    }
  }

  return -1;
};


console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
