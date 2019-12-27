const index = require('../index');

describe('Addition + mul',()=>{
    it("add two numbers",()=>{
        const sum = index.addTwoNumbers(2,3);
        expect(sum).toBe(5);
    });
    it("mul two numbers",()=>{
        const mul = index.MulTwoNumbers(2,3);
        expect(mul).toBe(6)
    });

});

