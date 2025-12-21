const passwordLength = document.getElementById("length");
const $result = document.querySelector(".result");
const generateBtn = document.getElementById("generate");

function generatePassword(length) {
  const uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
  const lowercaseABC = "abcdefghijklmnopqrstuvwxyz";
  const specialSymbols = "!@#$%^&*()?.<>|=+:;,[-_]";
  const numeric = "0123456789";
  const multiSelect = uppercaseABC + lowercaseABC + specialSymbols + numeric;
  let finalPassword = "";

  for (let i = 0; i < length; i++) {
    const randomChar =
      multiSelect[Math.floor(Math.random() * multiSelect.length)];
    finalPassword += randomChar;
  }

  $result.innerHTML = `<span>${finalPassword}</span>`;
}

generateBtn.addEventListener("click", () => {
  const length = Number(passwordLength.value);

  if (length < 8) {
    $result.innerHTML = "<span>Password must be at least 8 characters</span>";
    return;
  }

  generatePassword(length);
});