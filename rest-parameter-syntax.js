/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 * 
 * 
 * Rest combines individual elements into an array
 * It can also be used to represent the rest of the values
 * when restrucutring an array or abject.
 * 
 * Rest parameter syntax allows us to represent an 
 * indefinite number of arguments as an array.
 */

// Regular function call 
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log("Sum:", sum);

// Extra arguments are ignored
let sum2 = sumAll(1,2,3,4,5,6);
console.log("sum2", sum2);
// Function using ...rest
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }
    return sum;
}

let sum3 = sumRest(1,2,3,4,5,6)
console.log(sum3)

