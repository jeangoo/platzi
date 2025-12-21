const result = document.querySelector(".result");
const text = document.getElementById("text");
const analyzeBtn = document.getElementById("analyze");

function analyzeText(text) {
  const uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
  const lowercaseABC = "abcdefghijklmnopqrstuvwxyz";
  const specialSymbols = "!@#$%^&*()?.<>|=+:;,[-_]";
  const numeric = "0123456789";
  const aparrences = {
    uppercaseABC: 0,
    lowercaseABC: 0,
    specialSymbols: 0,
    numeric: 0,
  };

  for (let char of text.value) {
    if (uppercaseABC.includes(char)) {
      aparrences.uppercaseABC += 1;
    } else if (lowercaseABC.includes(char)) {
      aparrences.lowercaseABC += 1;
    } else if (specialSymbols.includes(char)) {
      aparrences.specialSymbols += 1;
    } else if (numeric.includes(char)) {
      aparrences.numeric += 1;
    }
  }

  result.innerHTML = `
    Uppercase: ${aparrences.uppercaseABC}<br>
    Lowercase: ${aparrences.lowercaseABC}<br>
    Numbers: ${aparrences.numeric}<br>
    Symbols: ${aparrences.specialSymbols}
  `;
}

analyzeBtn.addEventListener("click", () => {
  if (text) {
    analyzeText(text);
  } else {
    result.innerHTML = `Enter a text`;
  }
});