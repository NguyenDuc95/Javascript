// 9.	Cho một mảng gồm 5 phần tử tính trung cộng các phần tử trong mảng
let array = [2,10,3,9,-1];
let sum = 0;
for(let element of array){
    sum += element
}
console.log(`sum of array: ${sum/5}`);