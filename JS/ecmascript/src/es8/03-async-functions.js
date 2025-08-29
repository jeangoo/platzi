const asyncFunction = () => {
    return new Promise((resolve, reject) => {
        (true) 
        ? setTimeout(() => resolve('Async'), 2000)
        : reject(new Error('Error'))
    })
}

const sideFunction = async () => {
    const botGreet = await asyncFunction()
    console.log(botGreet)
    console.log('Hi!')
}

console.log("-")
sideFunction()
console.log(".")