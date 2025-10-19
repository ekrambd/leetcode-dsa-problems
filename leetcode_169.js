//169. Majority Element

var majorityElement = function(nums){
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
	}

	let map = new HashMap();

	let majorityCount = Math.floor(nums.length/2);

	for(let i = 0; i < nums.length; i++){
		let count = map.get(nums[i]);
		if(count == null){
			map.set(nums[i],1);
		}else{
			map.set(nums[i],count+1);
		}

		if(map.get(nums[i]) > majorityCount){
			return nums[i];
		}
	}

	return null;
	
};
console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));