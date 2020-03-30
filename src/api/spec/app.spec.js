const fizz = require('../app.js');
const ans = "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, FizzBuzz, 31, 32, Fizz, 34, Buzz, Fizz".split(", ");

describe("api test", ()=>{
    it("first 36 fizzbuzz should be correct",()=>{
        var result = fizz.fizzbuzz(36);
        for(let i = 0; i < 36; i++){
            expect(result[i]).toBe(ans[i]);
        }
    });
});