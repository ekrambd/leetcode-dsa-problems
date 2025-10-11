//88. Merge Sorted Array

var merge = function(nums1, m, nums2, n) {
    let arr1 = nums1.slice(0,m);
    let arr2 = arr1.concat(nums2);
    arr2.sort((a,b)=>a-b);
    for(let i = 0; i < arr2.length; i++){
        nums1[i] = arr2[i];
    }
    return nums1;
};
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));