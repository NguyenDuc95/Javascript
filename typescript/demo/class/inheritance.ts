class Animal {
    move(): void {
        console.log('Move! Move! Move!');
    }
}
interface MoveSky {
    value: string;
    fly(): void;
}
class Cat extends Animal implements MoveSky {
    value: string = 'value';
    eat() {
        console.log('eat eat eat');
    }
    fly() {
        console.log(this.value);
    }
}
const cat = new Cat();
cat.move();
cat.eat();
cat.fly();