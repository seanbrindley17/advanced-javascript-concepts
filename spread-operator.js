// No spread operator

// Defines array 1 with three numbers 
let arr1 = [1, 2, 3];

// Defines array 2 as equal to array 1
let arr2 = arr1;

// Pushes the number 4 to array 2
arr2.push(4);

// Logs the second array with all 4 numbers, this is fine
console.log("second array:", arr2);

/* 
 Logs the first array but also has 4 numbers despite array 2 being the one where the number 4 was pushed to
 This is because it's not a copy, it's a new variable that points to the same object as the first variable
 So anything done to the first array will be done to the second and vice versa
 */
console.log("first array:", arr1);

//-----------------------------------------------------------------------------------------------------

// Copying an array

// Creates new array as normal
let arr3 = [4, 5, 6];

// Spreads (essentially copies) array3 into array4 using ... to create a new object 
let arr4 = [...arr3];

// Adds the number 7 to array 4 only, because it's a new object seperate to array 3
arr4.push(7);
console.log("third array:", arr3);
console.log("forth array:", arr4);

//-----------------------------------------------------------------------------------------------------

// Copying an object

// Creates an object using curly brackets as standard
let obj1 = { a: 1, b: 2, c: 3 };

// Copies object 1's properties and adds a 4th property. obj1 remains untouched
let obj2 = { ...obj1, d: 4 };
console.log("first object:", obj1);
console.log("second object:", obj2);

// Obj3 copies obj1's properties, but then overwrites b to equal 5 instead of 2
let obj3 = { ...obj1, b: 5 };

// Obj1 still remains untouched
console.log(obj3);

//-----------------------------------------------------------------------------------------------------

// Copying only part of an array/object

/* 
Can create new array from a combination of previous arrays and objects
Gets the first array using spread, the first obj using spread within curly brackets as it's an object, the third array
and 3 new values: x, y and z.
*/
let arr5 = [...arr1, {...obj1}, ...arr3, "x", "y", "z"];
console.log(arr5);