function setLoader() {
  const loader = document.querySelector(".loader");
  const $a = document.querySelector("a");
  const $span = document.querySelector("span");

  $a.addEventListener("click", () => {
    $span.textContent = "Starting...";
    isLoading = true;
    setLoader();
    setTimeout(() => {
      $span.textContent = "Finished!";
      isLoading = false;
      setLoader();
    }, 3000);
  });

  if (isLoading === true) {
    loader.style.display = "block";
  } else {
    loader.style.display = "none";
  }
}

setLoader();
