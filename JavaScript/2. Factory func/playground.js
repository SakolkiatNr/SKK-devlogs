// closures
function outer() {
    const outerVar = "Bro Imma outer var"

    return function inner() {
        const innerVar = "Yo imma inner var";

        console.log(innerVar);
        console.log(outerVar);
    }
    
}

const innerFn = outer();
innerFn();



// create private var with closure
function createGreeting(greeting = '') {
    const myGreet = greeting.toUpperCase();

    return function(name) {
        return `${myGreet} ${name}`;
    };
}

const sayHello = createGreeting('hello');
const sayHey = createGreeting('hey');

console.log(sayHello('arm'));
console.log(sayHello('fah'));
console.log(sayHey('fiona'));


// private var
function createGame(gameName) {
    let score = 0;

    return function win() {
        score++;
        return `You name ${gameName} score is ${score}`
    }
}

const hockeyGame = createGame('Hockey');