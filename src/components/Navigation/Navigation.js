import "./navigation.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useVideos } from "../../context";
import { useState } from "react";
import { APPLY_SEARCH } from "../../helper/constants";

const Navigation = ({ setShowMobileNav }) => {
  const { authState } = useAuth();
  const { isLoggedIn } = authState;
  const { videoDispatch } = useVideos();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const searchHandler = () => {
    videoDispatch({ type: APPLY_SEARCH, payload: searchQuery });
    navigate("/searchresults");
    setSearchQuery("");
  };

  return (
    <nav className="flex nav">
      <span
        className="nav__menu"
        onClick={() => {
          setShowMobileNav((show) => !show);
        }}
      >
        <i className="fa-solid fa-bars fa-xl"></i>
      </span>
      <span className="nav__logo padding-sm">
        <img src="../../favicon.ico" className="img-logo" alt="logo" />
      </span>
      <h3 className="nav__brand">Play</h3>
      <span className="padding-sm nav__search flex">
        <input
          type="text"
          placeholder="Search by title or creator name..."
          className="nav__search--input"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <button className="nav__search--btn" onClick={searchHandler}>
          <i className="fa-solid fa-magnifying-glass fa-xl"></i>
        </button>
      </span>
      <span className="padding-sm secondary__btn-login">
        {isLoggedIn ? (
          <Link to="/logout">
            <button className="secondary__btn ">
              <i className="fa-regular fa-user secondary__btn-icon"></i>LOG OUT
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="secondary__btn ">
              <i className="fa-regular fa-user secondary__btn-icon"></i>SIGN IN
            </button>
          </Link>
        )}
      </span>
    </nav>
  );
};

export { Navigation };
