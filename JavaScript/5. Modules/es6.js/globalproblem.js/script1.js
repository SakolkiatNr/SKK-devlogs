// Use IIFE to store var in the global scope so the script2.js can execute!
const greeting = (() => {
    const greetingString = 'Yo bro!';
    const farewellString = 'So long mate';
    return {greetingString, farewellString};
})();