import { createContext, useContext, useReducer } from "react";
import { initialAuthState } from "../helper";
import { authReducer } from "../reducer";

const authContext = createContext();
const useAuth = () => useContext(authContext);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
  return (
    <authContext.Provider value={{ authState, authDispatch }}>
      {children}
    </authContext.Provider>
  );
};

export { AuthProvider, useAuth };
