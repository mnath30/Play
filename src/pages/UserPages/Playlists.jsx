import "./user-pages.css";
import {
  addNewPlaylist,
  getAllPlaylists,
  removePlaylist,
} from "../../services";
import { useAuth, useModal, useVideos } from "../../context";
import {
  Loader,
  HorizontalPlaylistCard,
  Empty,
  PlaylistModal,
} from "../../components";
import { useEffect } from "react";

const Playlists = () => {
  const { authState } = useAuth();
  const { encodedToken } = authState;
  const { videoState, videoDispatch } = useVideos();
  const { loader, playlists } = videoState;
  const { openPlaylist, showPlaylist, hidePlaylist } = useModal();
  const { displayPlaylist } = openPlaylist;
  useEffect(() => {
    if (encodedToken) {
      getAllPlaylists("/api/user/playlists", encodedToken, videoDispatch);
    }
  }, [encodedToken, videoDispatch]);

  const addPlaylist = (content) => {
    if (encodedToken && content)
      addNewPlaylist(
        "/api/user/playlists",
        encodedToken,
        content,
        videoDispatch
      );
    hidePlaylist();
  };

  const deletePlayList = (videoId) => {
    encodedToken &&
      removePlaylist(
        `/api/user/playlists/${videoId}`,
        encodedToken,
        videoDispatch
      );
  };

  return (
    <>
      {loader && <Loader />}
      {!loader && (
        <div className={`flex-col history__container`}>
          <div className=" flex history__header">
            <h1 className="history__container-title">My Playlists</h1>
            <button
              className="secondary__btn  history__container-btn"
              onClick={showPlaylist}
            >
              Create New Playlist
            </button>
          </div>
          {playlists.length === 0 && (
            <Empty message="You have not created any playlists yet" />
          )}
          {playlists.length !== 0 &&
            playlists.map((item) => (
              <HorizontalPlaylistCard
                key={item._id}
                cardItem={item}
                removeItemClickHandler={deletePlayList}
                message="Remove Playlist"
              />
            ))}
        </div>
      )}
      {displayPlaylist && (
        <PlaylistModal
          displayPlaylist={showPlaylist}
          addNewPlaylist={addPlaylist}
          closePlaylist={hidePlaylist}
        />
      )}
    </>
  );
};

export { Playlists };
