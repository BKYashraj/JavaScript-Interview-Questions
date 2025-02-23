// Spread operatorwith Function and String

// With Function
function sum(a,b,c){
    return a+b+c;
}

const arr = [1,2,3];

console.log(sum(...arr));

// with String

string = "Yashraj Desale"
const arr1 = [...string]
console.log(arr1)