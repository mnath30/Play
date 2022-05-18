import { LOGIN, SIGNUP, LOGOUT, LOADING, ERROR } from "../helper/constants";

const authReducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case LOGIN:
      return {
        ...state,
        loading: false,
        encodedToken: action.token,
        isLoggedIn: true,
        user: action.user,
        error: false,
      };
    case SIGNUP:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case LOGOUT:
      return {
        ...state,
        loading: false,
        encodedToken: "",
        isLoggedIn: false,
        user: "",
        error: false,
      };
    default:
      return { ...state };
  }
};

export { authReducer };
