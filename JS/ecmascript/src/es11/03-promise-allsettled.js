const rejectPromise = new Promise((resolve, reject) => reject("401"));
const resolvePromise = new Promise((resolve, reject) => resolve("200"));
const promiseStatus = new Promise((resolve, reject) => resolve("status ok"));

Promise.allSettled([rejectPromise, resolvePromise, promiseStatus]).then((res) =>
  console.log(res)
);

