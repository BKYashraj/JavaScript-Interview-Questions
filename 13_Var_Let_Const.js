// 1. VAR
// Declaration: Can be re-declared and updated.
// Scope: Function-scoped (not block-scoped).

var name = "Raj";
console.log(name); // Raj

var name = "Shivani"; // Re-declaration allowed
console.log(name); // Shivani

if (true) {
  var age = 21;
}
console.log(age); // 21 (even though it was declared inside if block)

// 2. let
// Declaration: Can be updated but not re-declared in the same scope.
// Scope: Block-scoped.

let name1 = "Raj";
console.log(name1); // Raj

// let name = "Shivani"; // Gives Error cannot redeclared
name1 = "Shivani"; // Updating is allowed
console.log(name1); // Shivani

if (true) {
  let age = 21;
  console.log(age); // 21
}
console.log(age); // Error! age is not defined outside the block


// 3. const
// Declaration: Cannot be re-declared or updated.
// Scope: Block-scoped.

const name2 = "Raj";
console.log(name2); // Raj

// name = "Shivani"; // Error: Assignment to constant variable

if (true) {
    const age = 21;
    console.log(age); // 21
  }
  console.log(age); // Error! age is not defined

// For all
if(true){
    var a = 10;
    let b = 20;
    const c = 30;
}
console.log(a);
// console.log(b); // Not accessed outside block scope
// console.log(c); // Not accessed outside block scope