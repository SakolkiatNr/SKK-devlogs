// initialize constructor for a new heroes

function Hero(name, level) {
    this.name = name;
    this.level = level;
}

// Add greet method to the Hero prototype
Hero.prototype.greet = function() {
    return `${this.name} says hello.`;
}

// Warrior constructor
function Warrior(name, level, weapon) {
    // copy properties from one constructor using call() method
    Hero.call(this, name, level);

    // Add a new property
    this.weapon = weapon;
}

// Initialize Healer constructor
function Healer(name, level, spell) {
    Hero.call(this, name, level);

    this.spell = spell;
}

Warrior.prototype.attack = function() {
    return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function() {
    return `${this.name} casts ${this.spell}`;
}

const hero1 = new Warrior(`Bjorn`, 1, `axe`);
const hero2 = new Healer(`Kanin`, 1, `cure`);

console.log(hero1.attack());
console.log(hero2.greet());

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);