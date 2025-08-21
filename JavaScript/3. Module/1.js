// Module

// create as an IIFE (immediately invoked function expression)

// this is module 
const SomeModule = (function() {})();

const Formatter = (function() {
    console.log('Start');
    let timesRun = 0;

    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
    const setTimesRun = () => {
        log("Setting times run");
        ++timesRun;
    }


    const makeUppercase = (text) =>  {
        log('Making uppercase');
        setTimesRun();
        return text.toUpperCase();
    };

    return {
        makeUppercase,
        timesRun
    }
})();

console.log(Formatter.makeUppercase('fiona'));
console.log(Formatter.timesRun);
