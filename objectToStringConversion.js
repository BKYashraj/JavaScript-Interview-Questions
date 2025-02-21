// 1. Object to String Conversion by using JSON.stringify 
// (Required Serialized Data [undefined, or function inside object not consider by stringify])

const obj = {
    name: "Yashraj Desale",
    age: 21,
    profession: "Software Developer",
    Company: "FinIQ"
}

const jsonString = JSON.stringify(obj);

console.log(obj);
console.log(jsonString);


// 1. String to Object Conversion by using JSON.parse

const str = '{"name":"Yashraj Desale","age":21,"profession":"Software Developer","Company":"FinIQ"}'

const jsonObject = JSON.parse(str);

console.log(jsonObject);