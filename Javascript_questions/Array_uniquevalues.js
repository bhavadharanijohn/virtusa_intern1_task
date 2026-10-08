const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function main() {
    const rl = readline.createInterface({ input, output });
    const userInput = await rl.question("Enter numbers separated by spaces: ");
    rl.close();

    const numbers = userInput.split(" ").map(Number);
    const uniqueValues = new Set(numbers);

    console.log("Original Array: ");
    console.log(numbers);
    console.log("Unique Values: ");
    console.log([...uniqueValues]);
}
main();