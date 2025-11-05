//202. Happy Number

var isHappy = function(n) {
    let seen = new Set();
    for(;;){
        if(n === 1) return true;
        if(seen.has(n)) return false;
        seen.add(n);
        let digits = n.toString();
        let sum = 0;
        for(let i = 0; i < digits.length; i++)
        {
            let digit = Number(digits[i]);
            sum+=digit*digit;
        }
        n = sum;
    }
};

console.log(isHappy(19));
console.log(isHappy(2));