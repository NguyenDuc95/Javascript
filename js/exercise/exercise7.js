// 7.	Cho một mảng gồm 5 phần tử tìm phần tử lớn thứ hai trong mảng
let array = [2,10,3,9,-1];
let v_max_first = array[0];
let v_max_second = array[1];
for(let element of array){
    if(v_min>element){
        v_min = element;
    }
}
console.log(`min of array: ${v_min}`);