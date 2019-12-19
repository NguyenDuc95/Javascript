// typescript has type variable: string, number, array, boolean, array, any, void, enum
// define a variable : var var_name: var_type;
var hellow_world = 'Hello World';
var b_check = true;
var n_number = 1;
var a_array = [1, 2, 3];
var c_enum;
(function (c_enum) {
    c_enum[c_enum["enum1"] = 0] = "enum1";
    c_enum[c_enum["enum2"] = 1] = "enum2";
    c_enum[c_enum["enum3"] = 2] = "enum3";
})(c_enum || (c_enum = {}));
console.log('--------------- variable --------------');
console.log(hellow_world);
console.log(b_check);
console.log(n_number);
console.log(a_array);
console.log(c_enum.enum1);
var a_any = 1;
console.log(a_any);
a_any = "change value";
console.log(a_any);
var any_array = [1, 2, true, 'any'];
console.log(any_array);
// function with typescript
console.log('---------------Function--------------------');
// 1. support type of input variable and type of output variable
function add(firstNumber, secondNUmber) {
    return firstNumber + secondNUmber;
}
var sum = function (firstNumber, secondNUmber) { return firstNumber + secondNUmber; };
console.log(add(1, 2));
console.log(sum(1, 2));
console.log('---------------Rest Parameters--------------');
var total = function (firstName, secondNUmber) {
    return firstName;
};
console.log(total(1));
var showFullName = function (id) {
    var Name = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        Name[_i - 1] = arguments[_i];
    }
    console.log(Name);
};
showFullName(1, 'string data');
console.log('---------------Class--------------');
