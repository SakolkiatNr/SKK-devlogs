class User {
    constructor (name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log('too short bro');
            return;
        }
        this._name = value;
    }
}

let user = new User('fiona'); // fiona
user = new User('');