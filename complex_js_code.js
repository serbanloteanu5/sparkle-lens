// Filename: complex_js_code.js
// Description: A complex JavaScript code showcasing various functionalities and advanced programming techniques.

// Define a class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static canVote(person) {
    return person.age >= 18;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Create some person objects
const person1 = new Person("John", 25);
const person2 = new Person("Jane", 32);
const person3 = new Person("Bob", 17);

// calling the introduce method
person1.introduce(); // Output: Hi, my name is John and I am 25 years old.
person2.introduce(); // Output: Hi, my name is Jane and I am 32 years old.

// Check if a person can vote
console.log(Person.canVote(person1)); // Output: true
console.log(Person.canVote(person2)); // Output: true
console.log(Person.canVote(person3)); // Output: false

// Define a class representing a Circle
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(newDiameter) {
    this.radius = newDiameter / 2;
  }

  get area() {
    return Math.PI * this.radius * this.radius;
  }
}

// Create a circle object
const circle = new Circle(5);

console.log(circle.radius); // Output: 5
console.log(circle.diameter); // Output: 10
console.log(circle.area); // Output: 78.53981633974483

circle.diameter = 12;
console.log(circle.radius); // Output: 6
console.log(circle.diameter); // Output: 12
console.log(circle.area); // Output: 113.09733552923255

// Define an asynchronous function that fetches data from an API
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the fetchData function and log the result
fetchData().then((data) => console.log(data));

// Define a higher-order function that takes a callback
function performOperation(value, callback) {
  console.log(`Performing operation on value: ${value}`);
  return callback(value);
}

// Define some callback functions
function square(value) {
  return value * value;
}

function cube(value) {
  return value * value * value;
}

// Call the higher-order function with different callbacks
console.log(performOperation(5, square)); // Output: Performing operation on value: 5, 25
console.log(performOperation(5, cube)); // Output: Performing operation on value: 5, 125

// ... Add more sophisticated and elaborate code here ...

// Output:
// Hi, my name is John and I am 25 years old.
// Hi, my name is Jane and I am 32 years old.
// true
// true
// false
// 5
// 10
// 78.53981633974483
// 6
// 12
// 113.09733552923255
// [Array of fetched data]
// Performing operation on value: 5
// 25
// Performing operation on value: 5
// 125