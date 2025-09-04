// 1. Variables and Data Types
let Name = "Oumar";
let Age = 21;
let isStudent = true;

console.log(typeof Name, Name);      // string
console.log(typeof Age, Age);       // number
console.log(typeof isStudent, isStudent); // boolean

console.log("\n");


// 2. Basic Arithmetic Operations
let x = 5;
let y = 2;

console.log("Addition: x + y = ", x + y);          // 7
console.log("Subtraction: x - y = ", x - y);       // 3
console.log("Multiplication: x * y = ", x * y);    // 10
console.log("Division: x / y = ", x / y);          // 2.5

console.log("\n");


// 3. Working with Strings
let sentence = "I am doing an assignment";

console.log("The string's length is: ", sentence.length); // 24
console.log("The string's first character is: ", sentence.charAt(0)); // I
console.log("The string's last character is: ", sentence.charAt(sentence.length - 1)); // t

console.log("\n");


// 4. Math Object

let negativeNumber = -15;

console.log("Square root of the negative number is: ", Math.sqrt(negativeNumber)); // NaN
console.log("Absolute value of the negative number is: ", Math.abs(negativeNumber)); // 15
console.log("The square of the negative number is: ", Math.pow(negativeNumber, 2)); // 225

console.log("\n");

// 5. Boolean Logic and Comparison Operators
let a = 10;
let b = 20;

console.log("a is greater than b: ", a > b); // false
console.log("a is less than b: ", a < b);    // true
console.log("a is equal to b: ", a == b);   // false

console.log("\n");

// 6. Logical Operators
let canParty = true;
let canDrink = false;

console.log("Can party and drink: ", canParty && canDrink); // false
console.log("Can party or drink: ", canParty || canDrink);  // true
console.log("Cannot drink: ", !canDrink);                   // true

console.log("\n");

// 7. Using Template Literals
let firstName = "Manar";
let lastName = "Ba";

let greeting = `Hello, this is my brother ${firstName} ${lastName}.`;

console.log(greeting); // Hello, this is my brother ${firstName} ${lastName}.





