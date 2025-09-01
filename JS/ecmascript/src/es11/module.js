export function moduleFunction() {
  setTimeout(() => {
    console.log("Hello world");
  }, 2000);
}

export const sideModuleFunction = async () => {
  setTimeout(() => {
    document.body.innerHTML += `<p>sideModuleFunction</p>`
  }, 1000);
}