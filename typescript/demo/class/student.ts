class Student {
    private name: string;
    private age: number;
    public university: string;
    constructor(name: string, age: number, university?: string) {
        this.name = name;
        this.age = age;
        this.university = university;
    }
    setName(name: string): void {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
    setAge(age: number): void {
        this.age = age;
    }
    getAge(): number {
        return this.age;
    }
    showInformation() {
        return `${this.name}-${this.age}-${this.university}`;
    }
}
const student = new Student('nguyen van B', 12, 'HN');
console.log(student.showInformation());

