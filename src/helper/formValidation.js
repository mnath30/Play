const emailValidation = (email) => {
  const positionOfAt = email.indexOf("@");
  const positionOfDot = email.lastIndexOf(".");
  if (
    positionOfAt < 1 ||
    positionOfDot < positionOfAt + 2 ||
    positionOfDot + 2 >= email.length
  ) {
    return false;
  } else {
    return true;
  }
};

const passwordValidation = (password) => {
  return password.length >= 6;
};

export { emailValidation, passwordValidation };
