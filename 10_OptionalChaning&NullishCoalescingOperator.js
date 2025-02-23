const user ={
    name: "Yashraj",
    address: {
        city: "Nashik"
    }
}

console.log(user.name)
// console.log(user.contact.phone) // It gives Error
console.log(user.contact?.phone) // It gives undefined now because of optional chaining

let user1 = {
    name: "Shivani",
    preference: null
}

console.log(user1.preference?.theme ?? 'light') // NullishCoalescing
// If the left side is null or undefined, it returns the right side.
// Otherwise, it returns the left side.


// ✅ Difference between || and ??:
// || (OR operator): returns the right side if the left side is any "falsy" value (0, '', false, null, undefined).
// ?? (Nullish Coalescing): only checks for null or undefined — not other falsy values like 0 or "".
console.log(0 || "default"); // "default"
console.log(0 ?? "default"); // 0 ✅ (because 0 is not null or undefined)
