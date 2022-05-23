import axios from "axios";

const login = async (userDetails) => {
  const apiResponse = { token: "", username: "", error: "" };
  try {
    let response;
    response = await axios.post("/api/auth/login", userDetails);
    if (response.status === 200) {
      apiResponse.token = response.data.encodedToken;
      apiResponse.username = `${response.data.foundUser.firstName} ${response.data.foundUser.lastName}`;
    }
  } catch (err) {
    apiResponse.error = err.response.data.errors[0].split(".")[0];
  }

  return apiResponse;
};

export { login };
