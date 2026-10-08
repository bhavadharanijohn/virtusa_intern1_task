import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", (str: string) => {
    let reversed: string = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str.charAt(i);
    }

    if (str.toLowerCase() === reversed.toLowerCase()) {
        console.log("Palindrome");
    } else {
        console.log("Not a Palindrome");
    }
    rl.close();
});