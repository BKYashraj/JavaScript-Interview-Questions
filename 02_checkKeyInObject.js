// Here we have to first convert key to string because JS internally understand string
// JS uses "in" operator to check 

const checkKeyInObj = (Key,obj) =>{
    if(!obj){
        return false;
    }

    return Key.toString() in obj;  
    // For "toString" it gives true
    // because 'Object Prototype' has toString present

    return obj.hasOwnProperty(Key); 
    // Then it does not goes to global space and gives false for toString
    
}

const obj = {
    name: "Yashraj",
    age: 21
} // we will take this typr of data from API also

const check = checkKeyInObj('toString',obj)

console.log(check);