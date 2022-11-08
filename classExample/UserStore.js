class UserStore {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    // get name() {
    //     return this.name;
    // }

    // set name(name) {
    //     this.name = name;
    // }
}
  
exports.UserStore = UserStore;
