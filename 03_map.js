// Map method is a array method
// Can transform array element
// Original array is immutable here 

const users = [
    { name: 'Yashraj', age: 21 },
    { name: 'Abhijit', age: 22 },
    { name: 'Ashish', age: 23 }
]

// ()=>{} Callback
// A callback is required in JavaScript for handling 
// asynchronous operations, managing execution order, 
// and reusing functions.

const ans = users.map((user) => {
    return { ...user, age: user.age += 5 }; // Returns a new object
})
// ... spread operator

console.log(ans);
