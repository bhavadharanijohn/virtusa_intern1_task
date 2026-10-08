import * as readline from 'readline';

class Mark {
    result(): void {
        console.log("Pass Mark or Fail Mark");
    }
}
class Pass extends Mark {
    override result(): void {
        console.log("Above 50%");
    }
}
class Fail extends Mark {
    override result(): void {
        console.log("Below 50%");
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Mark (pass/fail): ", (choice: string) => {
    let mark= new Mark;

    if (choice.trim().toLowerCase() === "pass") {
        mark = new Pass();
    } else if (choice.trim().toLowerCase() === "fail") {
        mark = new Fail();
    } else {
        console.log("Invalid choice.");
        rl.close();
        return;
    }
    mark.result();
    rl.close();
});