import "./horizontal-card.css";
import { Link } from "react-router-dom";

const HorizontalPlaylistCard = ({
  cardItem,
  removeItemClickHandler,
  message,
}) => {
  const { title, _id, videos } = cardItem;

  return (
    <div className="playlist__card flex">
      <div className="horiz__card-details flex-col">
        <div className="flex ">
          <Link to={`/myplaylists/${_id}`}>
            <div title={title}>
              <h2 className="horiz__card-title">{title}</h2>
            </div>
          </Link>

          <button
            className="secondary__btn remove-btn"
            onClick={() => removeItemClickHandler(_id)}
          >
            <span className="tooltip">{message}</span>
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
        <Link to={`/myplaylists/${_id}`}>
          <div className="horiz__card-info flex">
            <span>
              {videos.length !== 0
                ? `${videos.length} videos`
                : `No videos added`}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export { HorizontalPlaylistCard };
