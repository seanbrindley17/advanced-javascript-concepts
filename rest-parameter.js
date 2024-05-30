
// Regular function call 

// Create arrow funtion named sumAll, which takes parameters a, b and c and returns a, b and c added together
const sumAll = (a, b, c) => a + b + c;

// Calls the sumAll function using numbers 1, 2 and 3, logs the answer (6) to the console
let sum = sumAll(1, 2, 3);
console.log("Sum:", sum);

//-----------------------------------------------------------------------------------------------------

// Extra arguments are ignored

/*
 Javascript allows as many arguments to be passed regardless of how many are defined in the function
 It will just ignore extra ones. sumAll was defined with 3 arguments, so only 1, 2 and 3 are taken into account. 4, 5 and 6 are simply ignored
 The console will still return 6
*/ 
let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log("Sum2:", sum2);

//-----------------------------------------------------------------------------------------------------

// Function using ...rest

/*
 Creates new arrow function, takes 4 parameters; a, b, c and any extra arguments are squashed into a 4th parameter called rest using ...
 The 4th parameter will be an array within the funtion, and can be called anything, not necessarily "rest"
*/
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;        // Sums the first 3 parameters as normal
    for (let i of rest) {       // Iterates through the rest of the array
        sum += i;               // Adds each additional number to the existing sum
    }
    return sum;                 // Returns the sum when the loop has ended
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);       // Sum3 now adds all of the numbers in sumRest, despite only 3 arguments being defined before the ...rest
console.log("Sum3:", sum3);