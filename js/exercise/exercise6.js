// 6.	Cho một mảng gồm 5 phần tử tìm phần nhỏ nhất
let array = [2, 10, 3, 9, -1];
let minium = array[0];
for (let element of array) {
    if (minium > element) {
        minium = element;
    }
}
console.log(`Minium of array: ${minium}`);