console.log("Hellow World")

let arr = [2,2,2,2,2];
// let arr =  [1, 3, 2, 4, 5];
let count = 0; sum = 0
for(let i=0; i<arr.length; i++){
    sum += arr[i];
    count++;

}

let digit = Math.floor(sum/count);
let result = 0;
for(let x of arr) {
    if(digit === x) {
        result++;
    }
}
console.log(result)