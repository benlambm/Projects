/* ============================================================
   Random-1-to-100 Challenge Scaffold
   ============================================================ */

/**
 * generateRandomNumber
 * Return an integer in the inclusive range 1-100.
 * @returns {number}
 */
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // Generates a random integer between 1 and 100
}

/* ========== Unit-Test Helpers ========== */
let testsPassed = 0;
function assert(condition, msg) {
    if (condition) {
        console.log(`✅ PASS: ${msg}`);
        testsPassed++;
    } else {
        console.error(`❌ FAIL: ${msg}`);
    }
}

/* ========== Core Unit Tests ========== */

// 1. Should return a number
(function () {
    const n = generateRandomNumber();
    assert(typeof n === "number", "returns a value of type number");
})();

// 2. Should be an integer
(function () {
    const n = generateRandomNumber();
    assert(Number.isInteger(n), "returns an integer");
})();

// 3. Should never be less than 1
(function () {
    const n = generateRandomNumber();
    assert(n >= 1, "number is ≥ 1");
})();

// 4. Should never be greater than 100
(function () {
    const n = generateRandomNumber();
    assert(n <= 100, "number is ≤ 100");
})();

// 5. Range coverage sanity check (run 1 000 samples and
//    ensure every result falls in range)
//    NOTE: not a full randomness test—just a quick guard.
(function () {
    let allGood = true;
    for (let i = 0; i < 1000; i++) {
        const n = generateRandomNumber();
        if (n < 1 || n > 100 || !Number.isInteger(n)) {
            allGood = false;
            break;
        }
    }
    assert(allGood, "1 000 sampled outputs all within range and integer");
})();

/* ========== “Main-Style” Demo & Edge Fun ========== */
(function demo() {
    console.log("\n=== Demo: happy & unhappy flows ===");

    // Happy flow: show ten sample random picks.
    console.log("Ten happy picks (should look nicely random):");
    for (let i = 0; i < 10; i++) {
        console.log(`  Pick ${i + 1}:`, generateRandomNumber());
    }

    // Unhappy flow: deliberately break the contract to prove tests catch it.
    //   (Uncomment the snippet below once your function is working to
    //   see the tests scream.)

    function generateRandomNumber() { return 500; } // naughty override
    console.log("Now running range tests again with a bad implementation:");
    const naughty = generateRandomNumber();
    assert(naughty >= 1 && naughty <= 100, "naughty number still in range");


    console.log(`\nTests passed: ${testsPassed} / 5`);
})();