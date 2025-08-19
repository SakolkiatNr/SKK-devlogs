// closure

function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

const add5 = makeAdder(5);
console.log(add5); // not log because it's still a function, it's still need an argument
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

