const obj ={
    name: "Yashraj",
    age: 21
}

let name = obj.name;
let age = obj.age;

console.log(name,age)

// Above code gives correct ans but modern approach

let { name:userName, age } = obj;
console.log(userName , age)

// userName is alias here 

