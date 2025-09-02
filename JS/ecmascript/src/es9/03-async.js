async function* testGenerator() {
  yield await Promise.resolve("first");
  yield await Promise.resolve("second");
  yield await Promise.resolve("third");
}

const test = testGenerator();
test.next().then((res) => console.log(res.value));
test.next().then((res) => console.log(res.value));
test.next().then((res) => console.log(res.value));
console.log("four (outside)");

async function listOfBots(array) {
  for await (let bot of array) {
    console.log(bot);
  }
}

const botNames = listOfBots(["Bumper", "Proton", "Rapid", "Quest", "SunShine"]);
console.log("Explorer (outside)");

// const asyncFunction = () => {
//   setTimeout(() => {
//     return "inside function";
//   }, 2000);
// };
const asyncFunction = () => {
  return new Promise((res, rej) => {
    if (true) {
      res("async function");
    } else {
      rej("error");
    }
  });
};

const awaitFunction = async () => {
  const asyncResponse = await asyncFunction();
  console.log(asyncResponse);
  console.log("await function");
};

console.log("-");
awaitFunction();
console.log("end");