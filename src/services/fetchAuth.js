import axios from "axios";

const fetchLoginDetails = async (userDetails, login = false) => {
  const apiResponse = { token: "", username: "", error: "" };
  try {
    let response;
    if (login) {
      response = await axios.post("/api/auth/login", userDetails);
    } else {
      response = await axios.post("/api/auth/signup", userDetails);
    }
    if (response.status === 200) {
      apiResponse.token = response.data.encodedToken;
      apiResponse.username = `${response.data.foundUser.firstName} ${response.data.foundUser.lastName}`;
    } else if (response.status === 201) {
      apiResponse.token = response.data.encodedToken;
      apiResponse.username = `${response.data.createdUser.firstName} ${response.data.createdUser.lastName}`;
    }
  } catch (err) {
    if (login) {
      apiResponse.error = err.response.data.errors[0].split(".")[0];
    } else {
      apiResponse.error = "Account already registered";
    }
  }

  return apiResponse;
};

export { fetchLoginDetails };
