let arr = [1,2,3,4,5,6,7,8,9]
console.log(arr.includes(10))

const knowValidEmails = (array) => {
    for (let email of array) {
        if (email.includes("@") && email.includes(".")) {
            console.log(`${email} is a valid email.`)
        } else {
            console.log(`${email} is a invalid email.`)
        }
    }
} 

knowValidEmails(["alice@example.com", "bob@example", "charlie@example.com", "david@example.com", "eve@example.com", "frank.com", "example.com", ".com", "ivan@example.com", "judy@example.com"])