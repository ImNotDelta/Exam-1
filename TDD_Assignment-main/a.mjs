import test from "./test.mjs";

/*
    Challenge: Implement the `multiply` function.

    The function `multiply` takes an indefinit number of parameters (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
    It should return the product of the numbers, with the following constraints:

    1. If one or more of the parameters are not valid numbers, the function should return NaN (Not a Number).
    2. If either parameter is a string that can be converted to a number (e.g., "3"), it should be parsed into a number before multiplying.
    3. If either parameter is Infinity or -Infinity, return Infinity or -Infinity based on the rules of multiplication.
    4. Handle edge cases like multiplying by 0 and NaN appropriately.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `multiply` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.
function multiply(...args) {
    
    if (args.some(arg => isNaN(Number(arg)))) {
        return NaN;
    }

    return args.reduce((product, current) => product * Number(current), 1);
}


//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.
const tests = test ("Multiply function");

// Valid tests
tests.isEqual(multiply(2, 5), 10, "2 multiplied by 5 should be 10");
tests.isEqual(multiply("4", 2), 8, "4 multiplied by 2 should be 8");

// Invalid tests
tests.isNotANumber(multiply("Hey", 2), "If it's not a number it should return as NaN");

// Edge case
tests.isEqual(multiply(Infinity, 1), Infinity, "Infinity multiplied by 1 should be infinity");
tests.isEqual(multiply(-Infinity, 2), -Infinity, "-Infinity multiplied by 2 should be -infinity");
tests.isEqual(multiply(2, 0), 0, "2 multiplied by 0 should be 0");
tests.isEqual(multiply(), 1, "If empty it should return as 1");
//#endregion