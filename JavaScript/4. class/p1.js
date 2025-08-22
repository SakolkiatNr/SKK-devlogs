class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    showDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Country: ${this.country}`);
    }
}

const person1 = new Person('arm', '25', 'TH');
const person2 = new Person('fah', 26, 'TH');