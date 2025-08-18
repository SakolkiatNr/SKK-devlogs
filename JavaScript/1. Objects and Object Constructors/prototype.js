function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

// set Player as a prototype for adding getMarker function and can be use with any other inheritance
Player.prototype.getMarker = function() {
    console.log(`My marker is '${this.marker}'`);
};

Object.getPrototypeOf(Player.prototype);
// return Object.prototype

// Make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype);

Object.getPrototypeOf(Player.prototype); // return Person.prototype


const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');

player1.sayName();
player2.sayName();

player1.getMarker();
player2.getMarker();