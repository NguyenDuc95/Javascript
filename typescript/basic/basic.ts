// typescript has type variable: string, number, array, boolean, array, any, void, enum
// define a variable : var var_name: var_type;
var hellow_world: string = 'Hello World';
var b_check: boolean = true;
var n_number: number = 1;
var a_array: Array<number> = [1, 2, 3];
enum c_enum {
    enum1,
    enum2,
    enum3
}
console.log('--------------- variable --------------');
console.log(hellow_world);
console.log(b_check);
console.log(n_number);
console.log(a_array);
console.log(c_enum.enum1);
var a_any: any = 1;
console.log(a_any);
a_any = "change value";
console.log(a_any);
let any_array: Array<any> = [1, 2, true, 'any'];
console.log(any_array);
// function with typescript
console.log('---------------Function--------------------');
// 1. support type of input variable and type of output variable
function add(firstNumber: number, secondNUmber: number): number {
    return firstNumber + secondNUmber;
}
const sum = (firstNumber: number, secondNUmber: number): number => firstNumber + secondNUmber;

console.log(add(1, 2));
console.log(sum(1, 2));
console.log('---------------Rest Parameters--------------');
const total = (firstName: number, secondNUmber?: number): number => {
    return firstName;
}
console.log(total(1));
const showFullName = (id: number, ...Name: any[]) => {
    console.log(Name);
}
showFullName(1, 'string data');
console.log('---------------Class--------------');
