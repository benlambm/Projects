// bottles.js
import { Command } from 'commander';

function bottleWord(n) {
    return n === 1 ? 'bottle' : 'bottles';
}

function verse(n, drink = 'rootbeer') {
    if (n === 0)
        return `No more bottles of ${drink} on the wall.`;
    return `${n} ${bottleWord(n)} of ${drink} on the wall,\n` +
        `${n} ${bottleWord(n)} of ${drink},\n` +
        `Take one down, pass it around,\n` +
        `${n - 1 === 0 ? 'No more' : n - 1} ${bottleWord(n - 1)} of ${drink} on the wall.\n`;
}

const program = new Command();
program
    .option('--start <number>', 'starting number of bottles', '99')
    .option('--drink <name>', 'name of the drink', 'rootbeer');

program.parse();
const options = program.opts();

for (let i = Number(options.start); i >= 0; i--) {
    console.log(verse(i, options.drink));
}