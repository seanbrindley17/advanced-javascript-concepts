
// reduce()
// Reduces all element to a single output


// Summing an array of numbers:

const nums = [0, 1, 2, 3, 4];        // defines nums as a simple array of numbers

/*
 To use reduce(), it requires a callback function
 The parameters the callback function takes are typically called acc (accumulator) and curr (current value)
 The accumulator represents the value that will ultimately be returned using reduce(). In this example it will accumulate and keep track
 of the sum as the callback function is executed on each array item.
 Current value represents the current array item the callback function is being run on
*/
let sum = nums.reduce((acc, curr) => {
    console.log(                            // console shows how the acc and curr values work
        "Accumulator (acc)", acc,           // Accumulator is accumulating the sums of the current values as the function is executed for each array
        "Current Value (curr)", curr,
        "Total", acc + curr
    );
    return acc + curr;  // returns as the sum
// The 10 here is the specified initial value, so the callback will execute 5 times, for each array item
}, 10);                    // If no initial value is specified, the accumulator defaults to the first array item (in this case; 0). Initial value should always be specified.
console.log(sum);

/*
    let sum = nums.reduce(acc, curr) => acc + curr, 0);
*/

//-----------------------------------------------------------------------------------------------------


const teamMembers = [                   // teamMembers is an array of objects containing name, profession and yrs experience
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    }
  ];
  
  // Totaling a specific object property
  
  // Getting the total years experience of the team
  // Calling reduce on the teamMembers array, because it's executing on an object and not an individual number, curr needs dot notation to get the yrsExperience parameter
  let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0); // Initial value is extremely important here. Without it, javascript defaults to an object
  console.log(totalExperience);                                                         // which is then tries to add numbers too, leading to a jumbled string/integer mess        

  
  //-----------------------------------------------------------------------------------------------------


  // Grouping by a property, and totaling it too

  let experienceByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;    // To create a property in the object for the specific value, use curr.value
    if (!acc[key]) {                    // To check whether key already exists in the object I'm accumulated into. In this case whether the profession has been seen before in loop
        acc[key] = curr.yrsExperience;     // If it doesn't yet exist, it will be added to the accumulator and value will be the team member's experience
    } else {
        acc[key] += curr.yrsExperience      // If it does exist, the current experience will be added to the existing value
    }
    return acc;         // returns accummulated value at the end of the loop
  }, {});          // Initial value is set to an empty value using the 2nd set of curly brackets here

  console.log(experienceByProfession);


  //-----------------------------------------------------------------------------------------------------


  let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 73, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, english: 88, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

  // To find the name of the student with the highest english score and log both name and score using reduce
  //Creates constant named biggest which will reduce the students array
  const biggest = students.reduce((acc, cur) => {

    /*
     The array is iterated through to find the highest english score

    */ 
    acc = acc.max > cur.results.english ? acc: {name:cur.name, max:cur.results.english};
    return acc;
    }, {name: '', max: 0});  // Initial values are a blank string for name and max: 0 for score
console.log(biggest);

/* Using destructuring 
const biggest = students.reduce(({max, name}, {name:n, results:{english}}) => {
    if(max < english) {
        acc = {name:n, max: english};
    }
    return acc;
    }, {name: '', max: 0});
    
console.log(biggest);
*/