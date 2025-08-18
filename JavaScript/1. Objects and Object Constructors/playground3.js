function Car(brand) {
    if(!(this instanceof Car)) {
        throw Error('Must use the new operator to call the function');
    }
    this.brand = brand;
}

Car.prototype.getBrand = function() {
    return this.brand;
}

let car = new Car('Honda');
console.log(car.getBrand());

function getBrand(prefix) {
    console.log(prefix + this.brand);
}

let honda = {
    brand: `Honda`
};

let audi = {
    brand: 'Audi'
};

getBrand.call(honda, "It's a ");
getBrand.call(audi, "It's an ");