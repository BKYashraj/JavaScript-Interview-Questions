// Spread Operator with array and Object
const numbers = [1,2,3,4]
const copyNumbers = [...numbers];
console.log(copyNumbers)

const number1 = [1,2,3]
const number2 = [4,5,6,7]

const copyNumber = [...number1, ...number2];
console.log(copyNumber)

const number3 = [1,2,3]
const number4 = [6,7,8,9]

const copyNum = [0, ...number3, 4, 5, ...number4];
console.log(copyNum)

const obj = {
    name: "Yashraj Desale",
    age: 21,
    profession: "Software Developer",
    Company: "FinIQ"
}
const copyObj = {...obj}
console.log(copyObj)

const obj1 = {
    name: "Abhijit Wagh",
    age: 22,
    profession: "Software Developer",
    Company2: "Siemens"
}
const copyObj1 = {...obj,...obj1}
console.log(copyObj1)

const copyObj2 = {...obj,...obj1, year: 2023}
console.log(copyObj2)