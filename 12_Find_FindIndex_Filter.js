const users = [
    { id: 1, name: "Yashraj", age: 21 },
    { id: 2, name: "Rohit", age: 31 },
    { id: 3, name: "Darshan", age: 31 },
    { id: 4, name: "Rahul", age: 15 }
]

// find() = Returns the first element that matches the condition.

console.log(users.find((user)=>{ return user.age == 31}))

// findIndex() = Returns the index (position) of the first matching element.
console.log(users.findIndex((user)=>{ return user.age == 31}))

// filter() = Returns all matching elements as a new array.
console.log(users.filter((user)=>{ return user.age == 31}))