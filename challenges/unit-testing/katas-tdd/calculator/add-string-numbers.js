// stringCalculator.js

function add(numbers) {
    if (!numbers) return 0; // Handle empty string explicitly

    const numArray = numbers
        .split(',')
        .map(n => parseFloat(n.trim()))
        .filter(n => !isNaN(n));

    const negatives = [];
    let sum = 0;

    for (let i = 0; i < numArray.length; i++) {
        const num = numArray[i];

        if (num < 0) {
            negatives.push(num);
        } else if (num <= 1000) {
            sum += num;
        }
    }

    if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives.join(',')}`);
    }

    return sum;
}

module.exports = add;
