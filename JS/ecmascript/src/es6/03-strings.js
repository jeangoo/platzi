let hello = "Hello"
let world = "World"

// before es6
// let helloWorld = hello + " " + world + "!";

//  after es6(template literal strings)
let helloWorld = `${hello} ${world}!`


console.log(helloWorld)

// multilines strings

let text = 'im usign javascript \nit is awesome'
let text2 = `im using javascript too
i dont like it
`

console.log(text)
console.log(text2)