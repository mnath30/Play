import axios from "axios";

const signup = async (userDetails) => {
  const apiResponse = { token: "", username: "", error: "" };
  try {
    let response;
    response = await axios.post("/api/auth/signup", userDetails);
    if (response.status === 201) {
      apiResponse.token = response.data.encodedToken;
      apiResponse.username = `${response.data.createdUser.firstName} ${response.data.createdUser.lastName}`;
    }
  } catch (err) {
    apiResponse.error = "Account already registered";
  }
  return apiResponse;
};

export { signup };
