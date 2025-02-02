import test from "./test.mjs";

/*
    Challenge: Implement the `formatName` function.

    The function `formatName` takes a single parameter `name` (a string) and formats it based on the following rules:

    1. If `name` is not a string, return null.
    2. Remove any leading or trailing whitespace from the string.
    3. Capitalize the first letter of each word in the name (e.g., "john doe" becomes "John Doe").
    4. If the string is empty (after trimming), return an empty string.
    5. If the string contains special characters (e.g., "@", "#", etc.), return null.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `formatName` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.
function formatName(name) {
    if (typeof name !== "string") {
        return null;
    }
    if (/[^a-zA-Z0-9\s]/.test(name)) {
        return null;
    }
    
    let str = name.trim().split(/\s+/).filter(word => word.length > 0);

    return str.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}


//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.

const tests = test("Format name function");

// Valid tests
tests.isEqual(formatName("mina thai"),"Mina Thai", "End result should be 'Mina Thai'");
tests.isEqual(formatName(" Christoffer Walther "), "Christoffer Walther", "End result should be 'Christoffer Walther'");
tests.isEqual(formatName("1"), "1", "End result should be '1'");

// Invalid tests
tests.isEqual(formatName(2), null, "Result should be null");
tests.isEqual(formatName("mina@thai"), null, "Result should be null");

// Edge Case
tests.isEqual(formatName(" "), "", "Result should be ''");

//#endregion