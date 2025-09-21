import { returnDate }  from "./utils/module.js";

const greet = "Hello webpack!"
console.log(greet);

function validateDiscAccess(age, id) {
  if (age >= 18 && id)
    return "Approved"
  else if (age >= 18 && !id) {
    return "I dont know"
  } else {
    return "Rejected"
  }
}

console.log(validateDiscAccess(17, true));

console.log(returnDate());
