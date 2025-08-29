async function* testGenerator() {
  yield await Promise.resolve("first");
  yield await Promise.resolve("second");
  yield await Promise.resolve("third");
}

const test = testGenerator()
test.next().then(res => console.log(res.value))
test.next().then(res => console.log(res.value))
test.next().then(res => console.log(res.value))
console.log('four (outside)')

async function listOfBots(array) {
    for await (let bot of array) {
        console.log(bot)
    }
}

const botNames = listOfBots(["Bumper", "Proton", "Rapid", "Quest", "SunShine"])
console.log("Explorer (outside)")