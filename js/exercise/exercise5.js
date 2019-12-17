// 5.	Cho một mảng gồm 5 phần tử tìm phần tử lớn nhất
let array = [2, 10, 3, 9, -1];
let maximum = array[0];
for (let element of array) {
    if (maximum < element) {
        maximum = element;
    }
}
console.log(`Maximum of array: ${maximum}`);