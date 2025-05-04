function singSong(start = 99, beverage = "rootbeer") {
    for (let count = start; count > 0; count--) {
        const word = count === 1 ? "bottle" : "bottles";
        console.log(`${count} ${word} of ${beverage} on the wall`);
        console.log(`${count} ${word} of ${beverage},`);
        console.log("Take one down, pass it around,");

        const nextCount = count - 1;
        const nextWord = nextCount === 1 ? "bottle" : "bottles";
        if (nextCount > 0) {
            console.log(`${nextCount} ${nextWord} of ${beverage} on the wall.\n`);
        } else {
            console.log(`No more bottles of ${beverage} on the wall.\n`);
        }
    }
}

// Run it
singSong();