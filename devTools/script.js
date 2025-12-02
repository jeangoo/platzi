const submitButton = document.querySelector("button");
const $result = document.getElementById("result");

submitButton.addEventListener("click", () => {
  const x = document.getElementById("x");
  const xValue = parseInt(x.value);
  const y = document.getElementById("y");
  const yValue = parseInt(y.value);
  const result = xValue + yValue;

  $result.innerHTML = `${xValue} + ${yValue} = ${result}`;
});