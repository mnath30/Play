import "./authentication.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signup } from "../../services";
import { useAuth } from "../../context";
import { LOADING, SIGNUP, ERROR } from "../../helper/constants";
import { Loader } from "../../components";
import { emailValidation, passwordValidation } from "../../helper";

const Signup = () => {
  const navigate = useNavigate();
  const { authState, authDispatch } = useAuth();
  const { loading, error } = authState;
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password && userName) {
      const userNamearr = userName.split(" ");
      const firstName = userNamearr[0];
      const lastName = userNamearr.slice(1).join(" ") || "";
      if (!emailValidation(email)) {
        setErrorMsg("Enter valid Email");
      } else if (!passwordValidation(password)) {
        setErrorMsg("Password cannot be less than 6 characters");
      } else {
        authDispatch({ type: LOADING });
        const responseData = await signup({
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
        });
        const { error } = responseData;
        if (error) {
          authDispatch({
            type: ERROR,
          });
          setErrorMsg(error);
        } else {
          authDispatch({
            type: SIGNUP,
          });
          navigate("/login", { replace: true });
        }
      }
    } else {
      setErrorMsg("Fill all the fields");
    }
  };

  return (
    <>
      {loading && <Loader />}

      {!loading && (
        <div className="form__container">
          <h3 className="form__container-heading">Signup</h3>
          <form className="form__container-content">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              className="form-input padding-sm"
              type="text"
              placeholder="Enter your name"
              id="name"
              required
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
                setErrorMsg("");
              }}
            />

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
                  <i className="fa-solid fa-eye"></i>
                ) : (
                  <i className="fa-solid fa-eye-slash"></i>
                )}
              </button>
            </div>

            <button className="form-btn padding-sm" onClick={handleSubmit}>
              Signup
            </button>
            <p>
              Already have an account?
              <span>
                <Link className="form-link" to="/login">
                  Login
                </Link>
              </span>
            </p>
          </form>
          {(error || errormsg) && <p className="error-txt">{errormsg}</p>}
        </div>
      )}
    </>
  );
};

export { Signup };
