import "./playlist-modal.css";
import { useState } from "react";
import ReactDOM from "react-dom";

const modal = document.getElementById("modal");
const PlaylistModal = ({ displayPlaylist, addNewPlaylist, closePlaylist }) => {
  const [playlistName, setPlaylistName] = useState("");
  const playlistHandler = (e) => {
    if (playlistName) {
      addNewPlaylist({ title: playlistName });
      setPlaylistName("");
    }
  };
  if (!displayPlaylist) return null;
  return (
    <>
      {displayPlaylist &&
        ReactDOM.createPortal(
          <div className="modal__container flex-col">
            <div className="flex">
              <h4 className="modal__heading">Create Playlist</h4>
              <div className="padding-sm modal__close">
                <i
                  className="fa-solid fa-xmark secondary__btn-icon"
                  onClick={closePlaylist}
                ></i>
              </div>
            </div>
            <div className="padding-sm flex-col">
              <label htmlFor="playlist-name" className="modal__label">
                Name
              </label>
              <input
                className="padding-sm modal__input"
                type="text"
                placeholder="Enter playlist name"
                id="playlist-name"
                required
                value={playlistName}
                onChange={(e) => {
                  setPlaylistName(e.target.value);
                }}
              />
            </div>
            <div className="padding-sm flex">
              <button
                onClick={playlistHandler}
                className="secondary__btn padding-lg"
              >
                Create Playlist
              </button>
            </div>
          </div>,
          modal
        )}
    </>
  );
};

export { PlaylistModal };
