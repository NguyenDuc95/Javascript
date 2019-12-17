// 6.	Cho một mảng gồm 5 phần tử tìm phần nhỏ nhất
let array = [2,10,3,9,-1];
let v_min = array[0];
for(let element of array){
    if(v_min>element){
        v_min = element;
    }
}
console.log(`min of array: ${v_min}`);