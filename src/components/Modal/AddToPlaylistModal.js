import "./playlist-modal.css";
import { useState } from "react";
import { useVideos, useAuth } from "../../context";
import {
  addNewPlaylist,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
} from "../../services";

const AddToPlaylistModal = ({ displayPlaylist, closePlaylist, videoData }) => {
  const { authState } = useAuth();
  const { encodedToken } = authState;
  const { videoState, videoDispatch } = useVideos();
  const { playlists } = videoState;
  const [playlistName, setPlaylistName] = useState("");

  const isChecked = (item) =>
    item.videos?.some((element) => element?._id === videoData._id);

  const playlistHandler = () => {
    if (encodedToken && playlistName) {
      addNewPlaylist(
        "/api/user/playlists",
        encodedToken,
        { title: playlistName },
        videoDispatch
      );
      setPlaylistName("");
    }
  };

  const handleChecked = (item) => {
    isChecked(item)
      ? removeVideoFromPlaylist(
          `/api/user/playlists/${item._id}/${videoData._id}`,
          encodedToken,
          playlists,
          videoDispatch
        )
      : addVideoToPlaylist(
          `/api/user/playlists/${item._id}`,
          encodedToken,
          videoData,
          playlists,
          videoDispatch
        );
  };

  return (
    <>
      {displayPlaylist && (
        <div className="modal__container flex-col ">
          <div className="flex">
            <h4 className="modal__heading">Playlists</h4>
            <div className="padding-sm modal__close">
              <i
                className="fa-solid fa-xmark secondary__btn-icon"
                onClick={closePlaylist}
              ></i>
            </div>
          </div>
          <div className="padding-sm video_section">
            {playlists.length === 0 && <p>No Playlists Created Yet</p>}
            {playlists.length !== 0 &&
              playlists.map((item) => (
                <li key={item._id}>
                  <label htmlFor={item._id}>
                    <input
                      type="checkbox"
                      id={item._id}
                      name={item.title}
                      value={item._id}
                      checked={isChecked(item)}
                      onChange={() => handleChecked(item)}
                    />
                    {item.title}
                  </label>
                </li>
              ))}
          </div>
          <div className="hr"></div>
          <div className="padding-sm flex-col">
            <label htmlFor="playlist-name" className="modal__label">
              Create Playlist
            </label>
            <div className="flex modal__footer">
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
              <i
                className="fa-solid fa-circle-plus secondary__btn-icon fa-xl"
                onClick={playlistHandler}
              ></i>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { AddToPlaylistModal };
