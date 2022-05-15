import "./page-not-found.css";
import { Link } from "react-router-dom";
import { notFound_page } from "../../asset";

const PageNotFound = () => {
  return (
    <div className="not-found-page flex-col">
      <div className="not-found-page-img-container">
        <img
          src={notFound_page}
          alt="page-not-found"
          className="not-found-img"
        />
      </div>
      <p>
        Oops we coul not find what you were looking for. Go back to{" "}
        <Link to="/">
          <span className="link">home</span>
        </Link>{" "}
        page
      </p>
    </div>
  );
};

export { PageNotFound };
