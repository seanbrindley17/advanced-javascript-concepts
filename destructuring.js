
// Destructuring arrays

// this bit doesn't use destructuring, it's an example of a simple array and indexing
let ages = [30, 26, 27];            // Creates simple array with 3 numbers
let john = ages[0];                 // Assigns john to the first number in the array using the index 0
let mary = ages[1];                 // Assigns mary to the second number in the array using the index 1
let joe = ages[2];                  // Assigns joe to the third number in the array using the index 2
console.log(john, mary, joe);       // Logs the ages as expected


let ages2 = [31, 24, 29];               // Creates simple array with 3 numbers
let [mark, jerry, michael] = ages2;     // Assigns the first value in the ages2 array to the first variable in this array and so on, mark with 31, jerry with 24 and michael with 29
console.log(mark, jerry, michael);      // Logs the ages to the console

//-----------------------------------------------------------------------------------------------------

// Destructuring objects

let jobs = {                        // Creates an object called jobs with 3 properties; the names mike, jill and alicia and their jobs
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let {mike, jill, alicia} = jobs;    // To destructure the object, use the property name in curly brackets and have them = jobs
console.log(mike, jill, alicia);    // Logs the jobs to the console

/*
Because the square brackets and curly brackets are to the left of the expression i.e. ages2 and jobs, the software understands
that I'm trying to create 3 seperate variable by destructuring  
*/

//-----------------------------------------------------------------------------------------------------

// Destructuring subsets

let languages = ["english", "french", "spanish", "german", "japanese"];     // Creates an array named languages with 5 languages in it

// First two languages in the languages array are assigned to the johnNative and JohnSecondary variables. The remainder of the array is ignored
let [johnNative, johnSecondary] = languages;       
console.log(johnNative, johnSecondary);         // English and French assigned to john as expected

let [ , , maryNative, marySecondary] = languages;       // Assigns Spanish and German to Mary by using commas to skip previous items in the array
console.log(maryNative, marySecondary);

let languages2 = {                        // Creates an object named languages2 with 4 properties with language values
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};

/* 
 As values in an object (i.e. english) are represented by their property names (i.e. firstLanguage), destructuring can be done using only the 
 properties needed just by using their property names
*/
let { firstLanguage, thirdLanguage } = languages2;          
console.log(firstLanguage, thirdLanguage);

//-----------------------------------------------------------------------------------------------------

// Using rest parameter syntax

let fruits = ["apple", "orange", "banana", "peach", "cherry"];      // Create array of fruits
let [favourite, secondFavourite, ...others] = fruits;               // First two values in fruits array are assigned to favoruite & secondFavourite and ...rest is applied to the rest
console.log(favourite);                                             // Logs value of apple      
console.log(secondFavourite);                                       // Logs value of orange
console.log(others);                                                // Logs the remainder of the elements in an array   

let favouriteFoods = {          // Create an object named favouriteFoods with 4 properties (names) and the respective foods as values
    brian: "pizza",
    anna: "pasta",
    sarah: "salad",
    andrea: "steak"
};

let { brian, anna, ...rest } = favouriteFoods;      // Using destructuring to log brian and anna's favourite foods, and the remainder as an object
console.log(brian);           // Logs pizza
console.log(anna);            // Logs pasta                            
console.log(rest);            // Logs the remaining elements as an object  

// By destructuring using the ...rest parameter, you can use what you need and bundle together other elements you may need later on