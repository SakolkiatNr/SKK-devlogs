// Module

// create as an IIFE (immediately invoked function expression)

// this is module 
const SomeModule = (function() {})();

const Formatter = (function() {
    console.log('Start');
    let timesRun = 0;

    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

    const makeUppercase = (text) =>  {
        log('Making uppercase');
        return text.toUpperCase();
    };

    return {
        makeUppercase,
        timesRun
    }
})();

console.log(Formatter.makeUppercase('fiona'));
console.log(Formatter.timesRun);
