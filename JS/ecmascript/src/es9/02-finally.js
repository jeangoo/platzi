const promiseStatus = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("200");
    } else {
      reject("404");
    }
  });
};

promiseStatus()
  .then((response) => console.log(response))
  .catch((err) => console.log(err))
  .finally(() => console.log("process completed succesfully."));
