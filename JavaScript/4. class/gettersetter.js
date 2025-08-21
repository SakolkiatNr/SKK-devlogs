let user = {
    get name(){
        return this._name;
    },

    set name(value) {
        if (value.length < 4) {
            console('too short bro');
            return;
        }
        this._name = value;
    }
};

// '_' are internal and shouldn't be touched from outside the obj

console.log(user.name = 'fiona');