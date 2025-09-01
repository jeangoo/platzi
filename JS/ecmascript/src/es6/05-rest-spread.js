let files = [
  "03-strings.js",
  "04-default-params.js",
  "02-arrow-functions.js",
  "05-rest-spread.js",
];
let [firstFile, secondFile, , thirdFile] = files; // "02-arrow-functions.js" is ignored
console.log(firstFile, secondFile, thirdFile);

let githubAccount = { username: "jeangoo", repos: 5 };

let { username, repos } = githubAccount;
console.log(username, repos);

let product = { name: "Laptop", ram: "24GB" };
let price = "$1200";

let productData = { id: 1, ...product, price };
console.log(productData);

function setFilesName(name, extension, ...prefix) {
  const fileName = `${prefix[0]}-${name}.${extension}`;
  return fileName;
}

console.log(setFilesName("strings", "js", 1, 2, 3, 4, 5));
console.log(setFilesName("task-manager", "py", 4, 6, 3, 2));
