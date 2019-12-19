var Student = /** @class */ (function () {
    function Student(name, age, university) {
        this.university = 'HN';
        this.name = name;
        this.age = age;
        this.university = university;
    }
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.setAge = function (age) {
        this.age = age;
    };
    Student.prototype.getAge = function () {
        return this.age;
    };
    Student.prototype.showInformation = function () {
        return this.name + "-" + this.age + "-" + this.university;
    };
    return Student;
}());
var student = new Student('nguyen van b', 12, 'something');
console.log(student.showInformation());
