// 10.	Cho một mảng gồm 5 phần tử kiểm tra xem mảng có phải cấp số cộng hay không 
let array = [1, 4, 3, 2, 5];
let bCheck = true;
for (let index1 = 1; index1 < 4; index1++) {
    for (let index2 = index1; index2 > 0; index2--) {
        if (array[index2] < array[index2 - 1]) {
            let temp = array[index2];
            array[index2] = array[index2 - 1];
            array[index2 - 1] = temp;
        }
    }
}
let delta = array[1] - array[0];
for (let index = 2; index < 5; index++) {
    if (array[index] - array[index - 1] != delta) {
        bCheck = false;
        break;
    }
}
if (bCheck) {
    console.log("This array follows arithmetic progression");
}else{
    console.log("This array is not follow arithmetic progression");
}