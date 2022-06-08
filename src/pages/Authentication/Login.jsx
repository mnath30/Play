import "./authentication.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { login } from "../../services";
import { useAuth } from "../../context";
import { LOADING, LOGIN, ERROR } from "../../helper/constants";
import { Loader } from "../../components";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { authState, authDispatch } = useAuth();
  const { loading, error } = authState;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const testCredentials = (e) => {
    e.preventDefault();
    setEmail("maitreyeenath@gmail.com");
    setPassword("mait123");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      authDispatch({ type: LOADING });
      const responseData = await login({
        email: email,
        password: password,
      });
      const { token, username, error } = responseData;
      if (error) {
        authDispatch({
          type: ERROR,
        });
        setErrorMsg(error);
      } else {
        authDispatch({
          type: LOGIN,
          token: token,
          user: username,
        });
        localStorage.setItem("encodedToken", token);
        localStorage.setItem("user", username);
        navigate(location.state?.from?.pathname || "/", { replace: true });
      }
    }
  };
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div className="form__container">
          <h3 className="txt-center txt-lg form__container-heading">Login</h3>
          <form className="form__container-content">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              className="form-input padding-sm"
              type="email"
              placeholder="Enter your email"
              id="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrorMsg("");
              }}
            />

            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="form-input password-container">
              <input
                className=" padding-sm password-input"
                type={`${showPassword ? "text" : "password"}`}
                placeholder="Enter your password"
                id="password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMsg("");
                }}
              />
              <button
                onClick={() => setShowPassword((show) => !show)}
                className="password-btn"
              >
                {showPassword ? (
                  <i className="fa-solid fa-eye-slash"></i>
                ) : (
                  <i className="fa-solid fa-eye"></i>
                )}
              </button>
            </div>
            <button className="form-btn padding-sm" onClick={handleSubmit}>
              Login
            </button>
            <button
              className="form-btn btn-first padding-sm"
              onClick={testCredentials}
            >
              Login using test credentials
            </button>
            <p>
              <Link className="form-link" to="/signup">
                Create a new account
              </Link>
            </p>
          </form>
          {error && <p>{errormsg}</p>}
        </div>
      )}
    </>
  );
};

export { Login };
