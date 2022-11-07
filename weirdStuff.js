/* ==== All parameters are optional ==== */
function add(int1, int2) {
    return int1 + int2
}

const sum = add() //This is fine...
console.log(sum);


/* ==== Referencing undefined attributes ==== */
person = {};

console.log(person.name);//has never and will never be defined

/* ==== What the hell is this? ==== */

//All of the following are true
[] + [] === "";

{} + {} === NaN;

[] + {} === {};

{} + [] === 0;



