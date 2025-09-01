function* iterateValues(array) {
  for (let value of array) {
    yield value;
  }
}

const iterate = iterateValues(["py", "js", "tsx", "jsx"]);
console.log(iterate.next().value);
console.log(iterate.next().value);
console.log(iterate.next().value);
console.log(iterate.next().value);

function iterateForValues(array) {
  array.forEach((value) => {
    console.log(value);
  });
}

iterateForValues(["py", "js", "tsx", "jsx"]);
