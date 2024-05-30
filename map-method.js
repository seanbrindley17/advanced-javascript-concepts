  
// Using a for loop

// Defines nums as an array
let nums = [1, 2, 3, 4, 5];

// results is defined as an empty array
let results = [];

// creates "num" by looping through "nums"
for (let num of nums) {
    // pushes the items in the num array to the results array after multiplying them by 2
    results.push(num*2);
}

console.log(results);

//-----------------------------------------------------------------------------------------------------

// Using map()

//Using const ensures the function can't be overwritten and must be defined before being called
// Will never be written like this as the map() method expects a function
const multByTwo = function (num) {
    return num * 2;
}
const mapResults =  nums.map(multByTwo);
console.log(mapResults);

//-----------------------------------------------------------------------------------------------------

// Simplified w/ map()

// Move the function inside the brackets, doesn't need to be named 
const simplified = nums.map(function (num) { return num * 2 });

//-----------------------------------------------------------------------------------------------------

// Simplfied w/ map() + arrow function

// Only takes one parameter, the number 'num' to be multiplied by two. Doesn't need return, brackets and curly brackets because of fat arrow
const simpleArrow = nums.map(num => num * 2);
console.log(simpleArrow);

//-----------------------------------------------------------------------------------------------------

// With objects:
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];


// New constant = original array.map() returns an array for each student with their name and id
const studentsWithId = students.map(student => [student.name, student.id]); 