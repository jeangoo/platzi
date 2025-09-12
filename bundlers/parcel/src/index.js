const $app = document.getElementById("app");
const API_URL = "";

const main = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  const output = data?.map(() => {
    return `
  
  `;
  });
  $app.innerHTML = output;
};

main();