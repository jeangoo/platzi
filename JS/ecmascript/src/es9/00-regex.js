const isEmailValid = (arr) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    for (let email of arr) {
            const match = pattern.exec(email)
            if (match) {
                console.log(`${email} is valid`)
            } else {
                console.log(`${email} is not valid`)
            }
        }
}

isEmailValid(["jeaancast03@gmail.com", "miduga@hotmail.com", "jean5326.com"])