
// Simple Filtering
const people = [                    // Creates an array. Each array item is an object with 2 parameters, the name and age of a person 
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];


  // Calls the filter method on the people array. Uses callback function e.g. age >= 21. Must return true or false answer
  const oldEnough = people.filter(person => person.age >= 21);      // Creates constant 'oldEnough' using filter method which selects only those in the array over 21 years old
  console.log(oldEnough);       // Logs the names of people in the array over the age of 21
  
  /*
   Calls the filter method on the people array to search for people named Paul
   As the function name is arbitrary, person can be shortened to simply 'p' like in this example
   Remember to capitalise the P in Paul 
  */ 
  const paul = people.filter(p => p.name === "Paul");
  console.log(paul);            // Returns an array containing the "Paul" object

  /* 
   The filter method alway returns an array, even if the return is only one element
   To access the object itself, append [0] to the end, after the brackets as shown below.
   This gets the first element in the resulting array
   const paul = people.filter(p => p.name === "Paul")[0];
  */

  //-----------------------------------------------------------------------------------------------------
  

  // Complex Filtering
  const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
  ];

  // This is a more complex way of using the filter method:

  // Creates a constant using filter method. Passes the students array with the filter method. Curly brackets contains the logic of the funtion 
  const oldCandidates = students.filter(student => { 
        
        // Creates strongSkills, which passes the skills section of each student within the students array to return an array of those with at least 5 years experience
        let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);       // Will return empty array for Ariel as none of her skills pass 
        return strongSkills.length > 0;     // This filters out Ariel in the array as her array length in strongSkills is 0
  });
  console.log(oldCandidates);


  // To simplify the above code
    // Constant hasStrongSkill is created by extracting the students.filter function above into it's own function
    const strongSkill = student => {                                                // strongSkill is a constant that will return an array of students
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5 );       // which pass the strongSkills variable which is filtering student skills and searching for those
    return strongSkills.length > 0;                                                     // with >5 years experience. Returns array of students whose array length is >0                
  };

  // Logs candidates who pass the filter
  const secondCandidates = students.filter(strongSkill);    // Callback function (strongSkill) is isolated and much easier to reuse now
  console.log(secondCandidates);


  // To simplify it further, can extract the skill.yrsExperience into it's own external funtion called 5YrsExp which can be passed inside hasStrongSkills function
  const has5YrsExp = skill => skill.yrsExperience >= 5;

  // Doesn't need the strongSkills variable or return statement now. Adding .length to the inner filter does the job of the return statement
  const hasStrongSkills = student => student.skills.filter(has5YrsExp).length > 0;  // hasStrongSkills is looking to filter students within the students array whose skills pass the 
                                                                                    // 5YrsExp external function and return all those whose array length is > 0            
  // Creates constant 'candidates' which is an array of students who pass the hasStrongSkills filter of the original students array                                                                                    
  const candidates = students.filter(hasStrongSkills);   
  console.log(candidates);


  // Uses map method on the 'candidate' constant to retun array containing only the names of the students
  const names = candidates.map(student => student.name);
  console.log(names)
 