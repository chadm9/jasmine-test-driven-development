/**
 * Created by mephisto on 6/14/17.
 */

// 1 = 1;
// 2 = 2;
// 3 = Fizz;
// 4 = 4;
// 5 = Buzz;
// 15 = FizzBuzz;

describe('Fizzbuzz Unit Tests', function () {
    it('FizzBuzz must be defined', function () {
        expect(fizzbuzz()).toBeDefined();
    });

    it('Should be 1 for passing 1', function () {
        expect(fizzbuzz(1)).toBe(1);
    });

    it('Should be 2 for passing 2', function () {
        expect(fizzbuzz(2)).toBe(2);
    });

    it('Should be Fizz for passing 3', function () {
        expect(fizzbuzz(3)).toBe('Fizz');
    });

    it('Should be Buzz for passing 3', function () {
        expect(fizzbuzz(5)).toBe('Buzz');
    });

    it('Should be Buzz for passing 15', function () {
        expect(fizzbuzz(15)).toBe('FizzBuzz');
    });

    var random = Math.floor(Math.random() * 10) * 15;
    it('Should be a string, FizzBuzz for passing ' + random, function () {
        expect(fizzbuzz(random)).toEqual('FizzBuzz')
    });
});