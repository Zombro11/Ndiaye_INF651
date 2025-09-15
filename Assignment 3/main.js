
// Challenge 1: Even Number Finder (While Loop)
let number = 1;
while (number<=50){
    if(number%2 == 0){
        console.log(number)
    }
    number++;
};


// Challenge 2: PIN Validator (Do-While Loop)
const Pin = "1234";
let pinChoice;

do{
    pinChoice = prompt("Enter your 4 digit PIN: ");
} while(pinChoice !== Pin);

console.log("Access granted!");


//Challenge 3: Multiplication Table with Skips (For Loop + Continue)
let userNumber = prompt("Enter a number(challenge 3): ");

for(let i=1; i<=10; i++){
    let product = i * userNumber;
    if (product % 5 ===0){
        continue;
    }
    console.log(`${userNumber} * ${i} = ${product}`);
}


// Challenge 4: Positive/Negative Number Checker (If-Else)
let userNumber2 = prompt("Enter a number for challenge 4: ");
if(userNumber2 > 0){
    console.log("The number is positive.");
} else if(userNumber2 < 0){
    console.log("The number is negative.");
} else{
    console.log("The number is zero.");
}


// Challenge 5: Month Finder (Switch Statement)
let monthNumber = parseInt(prompt("Enter a number from 1-12: "));

switch(monthNumber){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid input.");
}



