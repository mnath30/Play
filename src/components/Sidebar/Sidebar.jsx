import "./sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink
        to="/"
        className={`({ isActive }) => (isActive ? "active" : "") sidebar-icon`}
      >
        <div>
          <i className="fa-solid fa-house fa-lg"></i>
          <div>Home</div>
        </div>
      </NavLink>
      <NavLink
        to="/explore"
        className={`({ isActive }) => (isActive ? "active" : "") sidebar-icon`}
      >
        <div>
          <i className="fa-regular fa-compass fa-lg"></i>
          <div>Explore</div>
        </div>
      </NavLink>

      <NavLink
        to="/watchlater"
        className={`({ isActive }) => (isActive ? "active" : "") sidebar-icon`}
      >
        <div>
          <i className="fa-regular fa-clock fa-lg"></i>
          <div>Watch Later</div>
        </div>
      </NavLink>

      <NavLink
        to="/history"
        className={`({ isActive }) => (isActive ? "active" : "") sidebar-icon`}
      >
        <div>
          <i className="fa-solid fa-clock-rotate-left fa-lg"></i>
          <div>History</div>
        </div>
      </NavLink>

      <NavLink
        to="/likedvideos"
        className={`({ isActive }) => (isActive ? "active" : "") sidebar-icon`}
      >
        <div>
          <i className="fa-regular fa-thumbs-up fa-lg"></i>
          <div>Liked Videos</div>
        </div>
      </NavLink>

      <NavLink
        to="/myplaylists"
        className={`({ isActive }) => (isActive ? "active" : "") sidebar-icon`}
      >
        <div>
          <i className="fa-solid fa-list-ul fa-lg"></i>
          <div>My Playlists</div>
        </div>
      </NavLink>
    </div>
  );
};

export { Sidebar };
