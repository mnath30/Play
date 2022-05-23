import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header__container">
      <div className="layer">
        <div className="header__text">
          <p className="header__content">All your favourites in one place</p>
          <Link to="/explore">
            <button className="header__btn">Explore</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Header };
