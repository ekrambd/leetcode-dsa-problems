//189. Rotate Array

var rotate = function(nums, k) {
    k = k % nums.length;
    let diff = nums.length - k;

    let arr1 = nums.slice(diff);
    let arr2 = nums.slice(0, diff);
    let arr = arr1.concat(arr2);

    for (let i = 0; i < nums.length; i++) {
        nums[i] = arr[i];
    }
};


console.log(rotate([1,2,3,4,5,6,7], 3));
console.log(rotate([-1,-100,3,99], 2)); 
