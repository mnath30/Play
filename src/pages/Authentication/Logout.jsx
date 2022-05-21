import "./authentication.css";
import { Link, useNavigate } from "react-router-dom";
import { LOGOUT, LOADING } from "../../helper/constants";
import { useAuth } from "../../context/authContext";
import { Loader } from "../../components";
import { useVideos } from "../../context";

const Logout = () => {
  const { authState, authDispatch } = useAuth();
  const { videoDispatch } = useVideos();
  const { loading } = authState;
  const navigate = useNavigate();
  const clearLoginDetails = () => {
    authDispatch({ type: LOADING });
    setTimeout(() => {
      authDispatch({ type: LOGOUT });
      videoDispatch({ type: LOGOUT });
      localStorage.removeItem("encodedToken");
      localStorage.removeItem("user");
      navigate("/");
    }, 1000);
  };
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div className="form__container">
          <h3 className="form__container-heading">Logout</h3>
          <p>Are you sure you want to leave?</p>
          <div className="flex form__container-footer">
            <button className="btn-first btn" onClick={clearLoginDetails}>
              Yes
            </button>
            <Link to="/explore">
              <button className="btn-second btn">No</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export { Logout };
