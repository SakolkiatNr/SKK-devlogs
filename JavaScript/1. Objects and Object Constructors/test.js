// create object
const myObject = {
    // can store many props
    property: 'value!',
    otherProperty: 123,
    // even functions!
    "obnoxious property": function() {
        // do stuffs
    }
};

// use object

myObject.property; //return value!
myObject["obnoxious property"]; //return function


// Object constructors
function Player(name, marker) {
    // it works like this vvv
    // name = 'argument name';
    this.name = name;
    this.marker = marker;
    
}

const player = new Player('arm', 'lol');
console.log(player.name); // 'arm'

// you can do function as well 
// take a look at this

function Smth(name, idk) {
    this.name = name;
    this.speech = idk;
    this.quote = speech() {
        console.log(this.quote);
    }
}

// safeguarding constructors!
// if user calls function without `new` it would hard to track bugs
// so you put this on
function Player(name, marker) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call this")
    }
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log(this.name)
    };
}