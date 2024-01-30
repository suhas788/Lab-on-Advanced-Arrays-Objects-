//Challenge 1: Given an array of strings, write a code to return a new array that only includes the strings that are 5 characters or more in length using filter method.
const strings = ['dog', 'by', 'cat', 'camping', 'large', 'flower', 'rabbit'];

const filteredStrings = strings.filter(str => str.length >= 5);

console.log(filteredStrings); 

// Output: ['camping', 'large', 'flower', 'rabbit']

//Challenge 2: Given an array of numbers, write a code to return a new array of squares for each item in an array using map method.
const numbers = ['45', '55', '65', '75', '85'];

const squares = numbers.map(num => Math.pow(parseInt(num), 2));

console.log(squares);

// Output: [2025, 3025, 4225, 5625, 7225]

//Challenge 3: Given an array of alphabets, write a code to concatenate all the elements of the array "alphabets" to make it as a string and print the same in console. Hint: Use reduce method.
const alphabets = ['K', 'a', 'l', 'v', 'i', 'u', 'm'];

const concatenatedString = alphabets.reduce((acc, current) => acc + current, '');

console.log(concatenatedString); // Output: "Kalvium"

//Challenge 4: Given an array of numbers, write a code to return a first even number using find method.
const number = [1, 2, 3, 4, 5];

const firstEvenNumber = numbers.find(num => num % 2 === 0);

console.log(firstEvenNumber); 
// Output: 2

//Challenge 5: Given a list of ranks, write a code to return the index of the first occurrence of the number 7 in the ranks array using findIndex method.
const ranks = [1, 5, 7, 8, 10, 7];


const indexOfSeven = ranks.findIndex(rank => rank === 7);

console.log(indexOfSeven); // Output: 2

//Challenge 6: Given a list of numbers, using forEach loop iterate over each element of the array to print the output as:
// 0:2
//1:4
//2:6
//3:8
const num = [2, 4, 6, 8];

num.forEach((element, index) => {
  console.log(`${index}:${element}`);
});

//Challenge 7: Given an array of marks, using "some method", check if the following array has at least one element less than 45 and print true.
const marks = [35, 66, 25, 85, 75, 45];

const hasElementLessThan45 = marks.some(mark => mark < 45);

console.log(hasElementLessThan45); // Output: true

//Challenge 8: Given an array of numbers, write a code to check if all the array elements are positive by using "every method" and print true if all the numbers are positive, else print false.
const positive = [2, 3, 4, -1];

const allPositive = positive.every(number => number > 0);

console.log(allPositive); // Output: false

//Challenge 9: Given an array of objects, using dot and bracket notation print the output as :
//1. "Audi"
//2. "Toyota  red"
//3. "Hyundai black 5"
//4. "Renault silver 6"
const cars = [
  {
    name: 'Audi',
    color: ['black', 'red', 'grey'],
    capacity: 5,
  },
  {
    name: 'Hyundai',
    color: ['white', 'grey', 'black'],
    capacity: 5,
  },
  {
    name: 'Toyota',
    color: ['red', 'white', 'black'],
    capacity: 7,
  },
  {
    name: 'Renault',
    color: ['blue', 'silver', 'red'],
    capacity: 6,
  },
];


cars.forEach((car, index) => {
  const { name, color, capacity } = car;
  console.log(`${index + 1}. "${name}${color.length > 0 ? ' ' + color.join(' ') : ''}${capacity ? ' ' + capacity : ''}"`);
});

//Challenge 10: Given a nested object,
//1. Delete the "phoneno" property from the object person.
//2. Using the hasOwnProperty check whether the person object has the property "bike", "house".
//3. Using dot and bracket notation get the output as "Mr Ajay Kumar travels by plane called Air123".
//4. Change the email property of person object to "ajaykumar@gmail.com".
//5. Generate an array of keys to the object person using object.keys() method.

const person = {
  name: 'Ajay Kumar',
  age: 27,
  vehicles: {
    car: 'limousine',
    bike: 'ktm-duke',
    plane: 'lufthansa',
  },
  email: 'ajay@gmail.com',
  phoneno: 9978425555,
};

delete person.phoneno;

const hasBike = person.hasOwnProperty('vehicles') && person.vehicles.hasOwnProperty('bike');
const hasHouse = person.hasOwnProperty('house');

console.log(hasBike); // Output: true
console.log(hasHouse); // Output: false

const output = `Mr ${person.name} travels by ${person.vehicles.plane} called Air123`;

console.log(output); // Output: "Mr Ajay Kumar travels by plane called Air123"

person.email = 'ajaykumar@gmail.com';

const keys = Object.keys(person);

console.log(keys); // Output: ['name', 'age', 'vehicles', 'email']

