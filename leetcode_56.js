//56. Merge Intervals

var merge = function(intervals){
    if(!intervals.length) return [];
    intervals.sort((a,b)=>a[0]-b[0]);
    let result = [intervals[0]];
    for(let i = 1; i < intervals.length; i++){
        let last = result[result.length-1];
        let current = intervals[i];
        if(current[0] <= last[1]){
            last[1] = Math.max(current[1],last[1]);
        }else{
            result.push(current);
        }
    }
    return result;
};
console.log(merge([[1,3],[2,6],[8,10],[15,18]]));