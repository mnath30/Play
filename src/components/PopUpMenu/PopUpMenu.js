import "./pop-up-menu.css";
const PopUpMenu = ({ watchLaterHandler, videoId, inWatchLater }) => {
  return (
    <div className="menu flex-col">
      <div className="menu__list">
        <div
          className="menu__list-item"
          onClick={() => watchLaterHandler(videoId)}
        >
          {inWatchLater ? "Remove from Watch Later" : "Save to Watch Later"}
        </div>
        <div className="menu__list-item">Save to playlist</div>
      </div>
    </div>
  );
};

export { PopUpMenu };
