var addBinary = function(a, b) {
    let carry = 0;
    let result = "";

    let i= a.length - 1;
    let j = b.length - 1;

    while(i >= 0 || j >= 0){
        let digitA = i >= 0 ? parseInt(a[i]) : 0;
        let digitB = j >= 0 ? parseInt(b[j]) : 0;
        
        let sum = digitA + digitB + carry;

        carry = Math.floor(sum / 2);

        result = (sum % 2) + result;

        i--;
        j--;
     }

     if(carry > 0){
        result = carry + result;
     }

     return result;
};

//Example usage:
console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));