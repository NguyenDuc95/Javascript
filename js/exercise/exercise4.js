// 4.	Tính tổng các chữ số của n ví dụ n = 123 thì kết quả là 1 + 2 + 3
let n = 123456789111;
let str_number = n.toString();
let size = str_number.length;
let sum = 0;
for(element of str_number){
    sum += parseInt(element);
}
console.log(`Sum of elements in number ${n}: ${sum}`);