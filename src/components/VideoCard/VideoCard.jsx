import "./video-card.css";
import { useState } from "react";
import { PopUpMenu } from "../PopUpMenu/PopUpMenu";
import { Link, useNavigate } from "react-router-dom";
import { addToWatchLater, removeFromWatchLater } from "../../services";
import { useVideos, useAuth, useModal } from "../../context";
import { AddToPlaylistModal } from "../Modal/AddToPlaylistModal";

const VideoCard = ({ videoDetails }) => {
  const { title, creator, views, thumbnail, img, _id } = videoDetails;
  const [showMenu, setShowMenu] = useState(false);
  const { authState } = useAuth();
  const { encodedToken } = authState;
  const navigate = useNavigate();
  const { videoState, videoDispatch } = useVideos();
  const { watchLater } = videoState;
  const { openPlaylist, showPlaylist, hidePlaylist } = useModal();
  const { displayPlaylist, videoContent } = openPlaylist;
  const titleNew = title.length > 36 ? title.slice(0, 33) + "..." : title;
  const creatorNew =
    creator.length > 16 ? creator.slice(0, 15) + "..." : creator;

  const handleChange = (e, setShowMenu) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setShowMenu(false);
    }
  };
  let isAddedToWatchLater = false;

  if (watchLater.length !== 0 && encodedToken) {
    isAddedToWatchLater = watchLater.some((item) => item._id === _id);
  }

  const handleWatchLater = (videoId) => {
    if (encodedToken) {
      isAddedToWatchLater
        ? removeFromWatchLater(
            `/api/user/watchlater/${videoId}`,
            encodedToken,
            videoDispatch
          )
        : addToWatchLater(
            `/api/user/watchlater`,
            encodedToken,
            videoDetails,
            videoDispatch
          );
    } else {
      navigate("/login");
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
            {showMenu && (
              <PopUpMenu
                watchLaterHandler={handleWatchLater}
                videoId={_id}
                inWatchLater={isAddedToWatchLater}
                videoContent={videoDetails}
              />
            )}
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
      {displayPlaylist && (
        <AddToPlaylistModal
          displayPlaylist={showPlaylist}
          closePlaylist={hidePlaylist}
          videoData={videoContent}
        />
      )}
    </div>
  );
};

export { VideoCard };
