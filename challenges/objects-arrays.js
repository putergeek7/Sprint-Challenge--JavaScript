// ==== Objects ====

/* 
  Given the following information about dinosaurs, create 3 objects: 
  Use this pattern to create your objects: 
  object name, diet, weight, length, period
*/

// tyrannosaurus, carnivorous, 7000kg, 12m, Late Cretaceous

const trex = {
  name: "tyrannosaurus",
  diet: "carnivorous",
  weight: "7000kg",
  length: "12m",
  period: "Late Cretaceous"
};

// stegosaurus, herbivorous, 2000kg, 9m, Late Jurassic

const stegosaurus = {
  name: "stegosaurus",
  diet: "herbivorous",
  weight: "2000kg",
  length: "9m",
  period: "Late Jurassic"
};

// velociraptor, carnivorous, 15kg, 1.8m, Late Cretaceous

const velociraptor = {
  name: "velociraptor",
  diet: "carnivorous",
  weight: "15kg",
  length: "1.8m",
  period: "Late Cretaceous"
};

// Using your dinosaur objects, log answers to these questions:

// How much did tyrannosaurus weigh?

console.log(trex.weight);

// What was the diet of a velociraptor?
console.log(velociraptor.diet);

// How long was a stegosaurus?

console.log(stegosaurus.length);

// What time period did tyrannosaurus live in?

console.log(trex.period);


// Create a new roar method for the tyrannosaurus.  When called, return "RAWERSRARARWERSARARARRRR!" Log the result.

const trex = {
  name: "tyrannosaurus",
  diet: "carnivorous",
  weight: "7000kg",
  length: "12m",
  period: "Late Cretaceous",
  roar: function() {
    return "RAWERSRARARWERSARARARRRR!";
  }
}

console.log(trex.roar());


// ==== Arrays ====

// Given an array of college graduates.  Complete the following requests using any array method you like

const graduates = [
  { id: 1, first_name: "Cynde", university: "Missouri Southern State College", email: "ctorry0@macromedia.com" },
  { id: 2, first_name: "Saundra", university: "The School of the Art Institute of Chicago", email: "swhal1@state.gov" },
  { id: 3, first_name: "Lambert", university: "Marian College", email: "lparham2@techcrunch.com" },
  { id: 4, first_name: "Modestine", university: "International Medical & Technological University", email: "mdolder3@symantec.com" },
  { id: 5, first_name: "Chick", university: "Sultan Salahuddin Abdul Aziz Shah Polytechnic", email: "camorts4@google.com.au" },
  { id: 6, first_name: "Jakob", university: "Fachhochschule Rosenheim, Hochschule für Technik und Wirtschaft", email: "jharken5@spiegel.de" },
  { id: 7, first_name: "Robbi", university: "Salem University", email: "rbrister6@redcross.org" },
  { id: 8, first_name: "Colline", university: "Coastal Carolina University", email: "cbrosh7@alibaba.com" },
  { id: 9, first_name: "Michail", university: "Universidad Católica de Ávila", email: "mrome8@shinystat.com" },
  { id: 10, first_name: "Hube", university: "Universitat Rovira I Virgili Tarragona", email: "hlethbrig9@foxnews.com" },
];

/* Request 1: Create a new array called universities that contains all the universities in the graduates array. This will be an array of strings.

Once you have the new array created, sort the universities alphabetically and log the result. */

const universities = [];

for(let i = 0; i < graduates.length; i++) {
  universities.push(graduates[i].university);
}

console.log(universities.sort());


/* Request 2: Create a new array called contactInfo that contains both first name and email of each student. This will be an array of strings.

The resulting contact information strings should have a space between the first name and the email, like this: 
"Josh josh@example.com"

Log the result of your new array. */

const contactInfo = [];

for(let i = 0; i < graduates.length; i++) {
  contactInfo.push(`${graduates[i].first_name} ${graduates[i].email}`);
}

console.log(contactInfo);


/* Request 3: Find out how many universities have the string "Uni" included in their name. Create a new array called unisWithUni that contains them all. This will be an array of objects. Log the result. */

const unisWithUni = [];

for(let i = 0; i < graduates.length; i++) {
  if (graduates[i].university.includes("Uni")) {
    unisWithUni.push({ university:graduates[i].university});
  }
}

console.log(unisWithUni);


// ==== ADVANCED Array Methods ====

// Given this zoo data from around the United States, follow the instructions below.  Use the specific array methods in the requests below to solve the problems.

const zooAnimals = [
  { animal_name: "Jackal, asiatic", population: 5, scientific_name: "Canis aureus", state: "Kentucky" },
  { animal_name: "Screamer, southern", population: 1, scientific_name: "Chauna torquata", state: "Alabama" },
  { animal_name: "White spoonbill", population: 8, scientific_name: "Platalea leucordia", state: "Georgia" },
  { animal_name: "White-cheeked pintail", population: 1, scientific_name: "Anas bahamensis", state: "Oregon" },
  { animal_name: "Black-backed jackal", population: 2, scientific_name: "Canis mesomelas", state: "Washington" },
  { animal_name: "Brolga crane", population: 9, scientific_name: "Grus rubicundus", state: "New Mexico" },
  { animal_name: "Common melba finch", population: 5, scientific_name: "Pytilia melba", state: "Pennsylvania" },
  { animal_name: "Pampa gray fox", population: 10, scientific_name: "Pseudalopex gymnocercus", state: "Connecticut" },
  { animal_name: "Hawk-eagle, crowned", population: 10, scientific_name: "Spizaetus coronatus", state: "Florida" },
  { animal_name: "Australian pelican", population: 5, scientific_name: "Pelecanus conspicillatus", state: "West Virginia" },
];

/* Request 1: .forEach()

The zoos want to display both the scientific name and the animal name in front of the habitats. Populate the displayNames array with only the animal_name and scientific_name of each animal. 
displayNames will be an array of strings, and each string should follow this pattern: "Name: Jackal, asiatic, Scientific: Canis aureus."

*/
const displayNames = [];

zooAnimals.forEach(function(animal) {
  return displayNames.push(`Name: ${animal.animal_name}, Scientific: ${animal.scientific_name}.`)
});

console.log(displayNames);


/* Request 2: .map()

The zoos need a list of all their animal's names (animal_name only) converted to lower case. Using map, create a new array of strings named lowCaseAnimalNames, each string 
following this pattern: "jackal, asiatic". Log the resut.

*/

const lowCaseAnimalNames = zooAnimals.map(animal => {

  return animal.animal_name.toLocaleLowerCase();
  });
  
  console.log(lowCaseAnimalNames);
  

/* Request 3: .filter() 

The zoos are concerned about animals with a lower population count. Using filter, create a new array of objects called lowPopulationAnimals which contains only the animals 
with a population less than 5.

*/
const lowPopulationAnimals = zooAnimals.filter(animal => {

  return animal.population < 5;
  
  });
  
  console.log(lowPopulationAnimals);


/* Request 4: .reduce() 

The zoos need to know their total animal population across the United States. Find the total population from all the zoos using the .reduce() method. Remember the reduce method takes 
two arguments: a callback (which itself takes two args), and an initial value for the count.

*/


const populationTotal = zooAnimals.map(animal => animal.population).reduce((populationTotal, animal_pop)=>populationTotal + animal_pop);


console.log(populationTotal);


/*

Stretch: If you haven't already, convert your array method callbacks into arrow functions.

// **************  LOOK ABOVE AND YOU SHOULD SEE ARROW FUNCTONS THAT WAS CONVERTED **************


*/



/*
QUESTIONS AND ANSWERS

1) Describe the biggest difference between .forEach & .map.

- .forEach iterates over a list and applies some operation with side effects to each list member.
- .map map iterates over a list, transforms each member of that list, and returns another list (such as an array) of the same size with the transformed members.

2) What is the difference between a function and a method?

- A function is defined outside of an object
- A method is defined as the property of an object

3) What is closure?

- A closure is code that's been identified elsewhere that we can use for later

4) Describe the four rules of the 'this' keyword.

- Implicit Binding this points to the object on which the function is called.
- Explicit Binding We can explicitly tell the JavaScript engine to set this to point to a certain value using call, apply or bind.
- new Binding Using the new keyword constructs a new object, and this points it.
- Arrow Functions this keeps the same value as its parent scope.

5) Why do we need super() in an extended class?

-  is used to access and call functions on an object's parent.





*/

