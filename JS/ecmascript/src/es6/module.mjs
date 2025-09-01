const isUserLoggedIn = (account, password) => {
  if (account && password.length >= 4) {
    return "User is logged in.";
  } else {
    return "User is not logged in.";
  }
};

export default isUserLoggedIn;
