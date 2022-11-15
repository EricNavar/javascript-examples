/* ==== All parameters are optional ==== */
function add(int1, int2) {
    const sum = int1 + int2;
    console.log(`${int1} + ${int2} = ${sum}`)
}

const sum = add() //This is fine...




/* ==== Referencing undefined attributes ==== */
person = {};

console.log('person.name =', person.name);//has never and will never be defined




/* ==== What the hell is this? ==== */

//All of the following are true
[] + [] === "";

{} + {} === NaN;

[] + {} === {};

{} + [] === 0;


// node 6.weirdStuff/weirdStuff.js
