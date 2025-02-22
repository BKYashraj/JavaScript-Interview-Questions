// In slice original array is not modified it still remains same

const arr = [1,2,3,4,5];

// By providing starting and ending index
const slice = arr.slice(1,3) // from 1 to 2 it exclude 3

console.log(arr);
console.log(slice);

// By providing starting index only 
// Print all values from that start index to end
const slice2 = arr.slice(1) 
console.log(slice2);