// 2.	Tính giai thừa của n.
let n = 10;
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial *= i;
}
console.log(`factorial of ${n}: ${factorial}`);