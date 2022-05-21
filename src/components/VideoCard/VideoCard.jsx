import "./video-card.css";
import { useState } from "react";
import { PopUpMenu } from "../PopUpMenu/PopUpMenu";
import { Link } from "react-router-dom";

const VideoCard = ({ videoDetails }) => {
  const { title, creator, views, thumbnail, img, _id } = videoDetails;
  const [showMenu, setShowMenu] = useState(false);
  const titleNew = title.length > 36 ? title.slice(0, 33) + "..." : title;
  const creatorNew =
    creator.length > 16 ? creator.slice(0, 15) + "..." : creator;
  const handleChange = (e, setShowMenu) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setShowMenu(false);
    }
  };
  return (
    <div className="flex-col card">
      <Link to={`/explore/${_id}`}>
        <div className="card__img">
          <img src={img} alt={title} className="video-img" />
        </div>
      </Link>
      <div className="flex card__header">
        <img src={thumbnail} className="card__thumbnail-img" alt={title} />
        <Link to={`/explore/${_id}`}>
          <div title={title} className="card__header-title">
            {titleNew}
          </div>
        </Link>
        <span
          className="card__header-btn"
          onBlur={(e) => handleChange(e, setShowMenu)}
        >
          <button onClick={() => setShowMenu((show) => !show)}>
            <i className="fa-solid fa-ellipsis-vertical fa-xl"></i>
            {showMenu && <PopUpMenu />}
          </button>
        </span>
      </div>
      <div className="flex card__footer">
        <div title={creator} className="card__footer-name">
          {creatorNew}
        </div>
        <span className="dot"></span>
        <span>{views} views</span>
      </div>
    </div>
  );
};

export { VideoCard };
