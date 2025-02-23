// Split, Map, Filter, Join

// Split: Converts a string into an array based on a specified delimiter.
// Map: Transforms each element in an array by applying a function.
// Filter: Returns a new array containing elements that satisfy a given condition.
// Join: Combines all elements of an array into a string, separated by a specified delimiter

const sentence = "Learning Javascript is fun";

const word = sentence.split(" ");
console.log(word);

const longWords = word.filter( (word) => word.length > 3)
console.log(longWords)

const upperCase = longWords.map((word)=> word.toUpperCase())
console.log(upperCase)

const finalSentence = upperCase.join(" ");
console.log(finalSentence)