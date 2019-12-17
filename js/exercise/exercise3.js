// 3.	Tìm các số nguyên tố trong khoảng từ 1 đến n
let n = 3;

for (let numb = 2; numb <= n; numb++) {
    let isPrimeNumber = true;
    let numbSqrt = Math.sqrt(numb);
    for (let i = 2; i <= numbSqrt; i++) {
        if (numb % i == 0) {
            isPrimeNumber = false;
            break;
        }
    }
    if (numb > 1 && isPrimeNumber) {
        console.log(`${numb} is a prime number`);
    }
}





