// 7.	Cho một mảng gồm 5 phần tử tìm phần tử lớn thứ hai trong mảng
let array = [11, 10, 3, 9, -1];
let max_1;
let max_2;
if (array[0] > array[1]) {
    max_1 = array[0];
    max_2 = array[1];
} else {
    max_1 = array[1];
    max_2 = array[0];
}
for (let index = 2; index < 5; index++) {
    if (max_1 < array[index]) {
        max_2 = max_1;
        max_1 = array[index];
    } else if (max_2 < array[index]) {
        max_2 = array[index];
    }
}
console.log(`Max 1: ${max_1}`);
console.log(`Max 2: ${max_2}`);