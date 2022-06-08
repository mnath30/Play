import ReactDOM from "react-dom";
import "./overlay-background.css";

const overlay = document.getElementById("overlay");
const OverlayBackground = ({ displayPlaylist, closePlaylist }) => {
  if (!displayPlaylist) return null;
  return ReactDOM.createPortal(
    <div className="overlay-background" onClick={closePlaylist}></div>,
    overlay
  );
};

export { OverlayBackground };
