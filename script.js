const ageCheck = function (age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

/* Alternative using an arrow function and a conditional operator:
const ageCheck2 = (age) => { return (age >= 18 ? true : false); }
*/

const greeting = function (age) {
    return (ageCheck(age) ? 'Hello there.' : 'Hey kiddo.');
}

console.log(greeting(19));