const initialAuthState = {
  loading: false,
  error: false,
  encodedToken: localStorage.getItem("encodedToken")
    ? localStorage.getItem("encodedToken")
    : "",
  isLoggedIn: localStorage.getItem("encodedToken") ? true : false,
  user: "",
};

export { initialAuthState };
