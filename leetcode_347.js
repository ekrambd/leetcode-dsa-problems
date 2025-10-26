//347. Top K Frequent Elements

var topKFrequent = function(nums, k) {
    class HashMap {
        constructor() {
            this.map = new Map();
        }
        set(key, value) {
            this.map.set(key, value);
        }
        get(key) {
            return this.map.has(key) ? this.map.get(key) : null;
        }
    }

    if (nums.length === 1) return [nums[0]];

    let map = new Map();

    // Count occurrences
    for (let i = 0; i < nums.length; i++) {
        let count = map.get(nums[i]);
        if (count == null) map.set(nums[i], 1);
        else map.set(nums[i], count + 1);
    }

    // Create array of [num, freq], sort by freq desc
    const entries = Array.from(map.entries()); // [[num, freq], ...]
    entries.sort((a, b) => b[1] - a[1]);

    // Take top k keys
    const result = entries.slice(0, k).map(([num, freq]) => num);

    return result;
};

// Tests
console.log(topKFrequent([1,1,1,2,2,3],2));            // [1, 2]
console.log(topKFrequent([1],1));                      // [1]
console.log(topKFrequent([1,2,1,2,1,2,3,1,3,2],2));    // [1, 2]
console.log(topKFrequent([1,2],2));                    // [1, 2]
console.log(topKFrequent([3,0,1,0],1));                // [0]  <-- fixed
