// Fortune Cookie Message Generator

// Arrays of different message components
const beginnings = [
    "You will",
    "Soon you'll",
    "In the near future, you'll",
    "The stars suggest you'll",
    "Destiny reveals you'll",
    "Your path leads to",
    "Tomorrow brings",
    "Fortune smiles as you"
];

const actions = [
    "discover",
    "encounter",
    "find",
    "receive",
    "achieve",
    "experience",
    "embrace",
    "unlock"
];

const subjects = [
    "unexpected happiness",
    "a wonderful opportunity",
    "great success",
    "a pleasant surprise",
    "new friendships",
    "financial prosperity",
    "inner peace",
    "true love",
    "valuable knowledge",
    "a life-changing moment"
];

const timeframes = [
    "very soon",
    "when you least expect it",
    "in the coming months",
    "before the next full moon",
    "within the week",
    "by year's end",
    "when the time is right",
    "after a important decision"
];

const advice = [
    "Keep your heart open",
    "Trust your instincts",
    "Stay positive",
    "Be patient",
    "Take that chance",
    "Share your happiness",
    "Remember to smile",
    "Follow your dreams"
];

// Function to get a random element from an array
const getRandomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

// Function to generate a fortune cookie message
const generateFortune = () => {
    const beginning = getRandomElement(beginnings);
    const action = getRandomElement(actions);
    const subject = getRandomElement(subjects);
    const timeframe = getRandomElement(timeframes);
    const wisdomAdvice = getRandomElement(advice);

    // Combine the components into a fortune
    const fortune = `${beginning} ${action} ${subject} ${timeframe}. ${wisdomAdvice}!`;
    return fortune;
};

// Generate multiple fortunes
const generateMultipleFortunes = (count) => {
    const fortunes = [];
    for (let i = 0; i < count; i++) {
        fortunes.push(generateFortune());
    }
    return fortunes;
};

// Example usage
console.log("Your Fortune Cookie Says:");
console.log(generateFortune());

console.log("\nThree More Fortunes:");
const moreFortunes = generateMultipleFortunes(3);
moreFortunes.forEach((fortune, index) => {
    console.log(`${index + 1}. ${fortune}`);
});

// Export functions for use in other files
module.exports = {
    generateFortune,
    generateMultipleFortunes
};

