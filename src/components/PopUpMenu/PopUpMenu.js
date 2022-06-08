import "./pop-up-menu.css";
import { useAuth, useModal } from "../../context";
import { useNavigate } from "react-router-dom";

const PopUpMenu = ({
  watchLaterHandler,
  videoId,
  inWatchLater,
  videoContent,
}) => {
  const { authState } = useAuth();
  const { encodedToken } = authState;
  const navigate = useNavigate();
  const { showPlaylist } = useModal();
  const playlistHandler = () => {
    if (encodedToken) {
      showPlaylist(videoContent);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="menu flex-col">
        <div className="menu__list">
          <div
            className="menu__list-item"
            onClick={() => watchLaterHandler(videoId)}
          >
            {inWatchLater ? "Remove from Watch Later" : "Save to Watch Later"}
          </div>
          <div className="menu__list-item" onClick={playlistHandler}>
            Save to playlist
          </div>
        </div>
      </div>
    </>
  );
};

export { PopUpMenu };
