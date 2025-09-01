const importModuleBtn = document.getElementById("mainBtn");
const importSideModuleBtn = document.getElementById("sideBtn")

importModuleBtn.addEventListener("click", async () => {
  const module = await import("./module.js");
  console.log(module);
  setTimeout(() => {
    console.log("1");
  }, 1000);
  module.moduleFunction();
});

importSideModuleBtn.addEventListener("click", async () => {
  const module = await import("./module.js");
  module.sideModuleFunction();
});
