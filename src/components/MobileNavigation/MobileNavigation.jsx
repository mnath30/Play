import "./mobile-navigation.css";
import { NavLink } from "react-router-dom";

const MobileNavigation = ({ setShowMobileNav }) => {
  const closeMenu = () => {
    setShowMobileNav((show) => !show);
  };
  return (
    <div className="mobile-nav">
      <div className="flex mobile-nav__heading">
        <span className="mobile-nav__menu" onClick={closeMenu}>
          <i className="fa-solid fa-bars fa-xl mobile-nav__btn"></i>
        </span>
        <span className="mobile-nav__logo padding-sm">
          <img src="../../favicon.ico" className="img-logo" alt="logo" />
        </span>
        <h3 className="mobile-nav__brand">Play</h3>
      </div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={`({ isActive }) => (isActive ? "active" : "") mobile-nav__sidebar-item`}
            onClick={closeMenu}
          >
            <i className="fa-solid fa-house fa-lg mobile-nav__icons"></i>
            <span className="mobile-nav__options">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/explore"
            className={`({ isActive }) => (isActive ? "active" : "") mobile-nav__sidebar-item`}
            onClick={closeMenu}
          >
            <i className="fa-regular fa-compass fa-lg mobile-nav__icons"></i>
            <span className="mobile-nav__options">Explore</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/watchlater"
            className={`({ isActive }) => (isActive ? "active" : "") mobile-nav__sidebar-item`}
            onClick={closeMenu}
          >
            <i className="fa-regular fa-clock fa-lg mobile-nav__icons"></i>
            <span className="mobile-nav__options">Watch Later</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/history"
            className={`({ isActive }) => (isActive ? "active" : "") mobile-nav__sidebar-item`}
            onClick={closeMenu}
          >
            <i className="fa-solid fa-clock-rotate-left fa-lg mobile-nav__icons"></i>
            <span className="mobile-nav__options">History</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/likedvideos"
            className={`({ isActive }) => (isActive ? "active" : "") mobile-nav__sidebar-item`}
            onClick={closeMenu}
          >
            <i className="fa-regular fa-thumbs-up fa-lg mobile-nav__icons"></i>
            <span className="mobile-nav__options">Liked Videos</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export { MobileNavigation };
