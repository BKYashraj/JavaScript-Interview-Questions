// In case of Splice original array will be modified
// Splice is used to Add, Remove and Replace element

const arr = [10,20,30,40,50]

arr.splice(2,1); // Means it remove 1 ele from 2nd index
console.log(arr);

arr.splice(1,2); // Means it remove 2 ele from 1st index
console.log(arr);

arr.splice(2,0,30) 
// 2 - index, 0 - not remove anything, 30 - add it to index = 2
console.log(arr);

arr.splice(1,1,40,50) 
// 1 - index, 1 - remove 1 ele from index, 40,50 - add it from index = 2
console.log(arr);