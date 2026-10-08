import * as readline from 'readline';

function countWordFrequency(): void {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("Enter a paragraph:\n", (paragraph: string) => {
        const cleanedText = paragraph.toLowerCase().replace(/[^\w\s]/g, '');
        const words: string[] = cleanedText.split(/\s+/).filter(word => word.length > 0);
        const frequency = new Map<string, number>();

        for (const word of words) {
            if (frequency.has(word)) {
                frequency.set(word, frequency.get(word)! + 1);
            } else {
                frequency.set(word, 1);
            }
        }
        console.log("\nWord Frequencies:");
        for (const [word, count] of frequency.entries()) {
            console.log(`${word} : ${count}`);
        }
        rl.close();
    });
}
countWordFrequency();