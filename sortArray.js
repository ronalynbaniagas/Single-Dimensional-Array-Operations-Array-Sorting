const readline = require('readline');

// Set up readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];
let names = [];
let inputNumbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let inputNames = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

let numberIndex = 0;
let nameIndex = 0;

// Function to populate numbers array
function askForNumber() {
    if (numberIndex < inputNumbers.length) {
        rl.question(`Enter number ${numberIndex + 1} (default ${inputNumbers[numberIndex]}): `, (input) => {
            numbers.push(input ? parseInt(input) : inputNumbers[numberIndex]);
            numberIndex++;
            askForNumber();
        });
    } else {
        askForName();
    }
}

// Function to populate names array
function askForName() {
    if (nameIndex < inputNames.length) {
        rl.question(`Enter name ${nameIndex + 1} (default ${inputNames[nameIndex]}): `, (input) => {
            names.push(input || inputNames[nameIndex]);
            nameIndex++;
            askForName();
        });
    } else {
        processResults();
    }
}

// Function to process and display results
function processResults() {
    // Merge arrays
    let mergedArray = numbers.concat(names);
    console.log("Merged Array: ", mergedArray.join(", "));

    // Sort numbers in reverse
    numbers.sort((a, b) => b - a);
    console.log("Numbers sorted in reverse: ", numbers.join(", "));

    // Sort names alphabetically
    names.sort();
    console.log("Names sorted alphabetically: ", names.join(", "));

    rl.close();
}

// Start the process
askForNumber();
