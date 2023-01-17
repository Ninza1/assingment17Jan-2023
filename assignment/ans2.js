console.log("Souliton of 2nd Quesiton");


let arr1 = [1, 4, 3, 2];
// let arr1 = [1, 4, 3, 4]; 
let s = l = arr1[0]

for (let i = 1; i < arr1.length; i++){
    if (arr1[i] > l) {
        l = arr1[i]
    } else if (arr1[i]<s) {
        s = arr1[i];
    }
}
// console.log(s, l)

let sum1 = 0;
let count1 = 0
for (x of arr1) {
    if (x == s || x ==l) {
        sum1 += x;
        count1++;
    }
    
}
// console.log(count1,sum1)

console.log(sum1/count1)