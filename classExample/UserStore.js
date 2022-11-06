class UserStore {
    constructor(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }

    // get id() {
    //     return this.id;
    // }

    // get name() {
    //     return this.name;
    // }

    // get city() {
    //     return this.city;
    // }

    // set id(id) {
    //     this.id = id;
    // }

    // set name(name) {
    //     this.name = name;
    // }

    // set city(city) {
    //     this.city = city;
    // }
}
  
const square = new UserStore('Saul', 10, 'tampa');
console.log(square.name); // 100

exports.UserStore = UserStore;
