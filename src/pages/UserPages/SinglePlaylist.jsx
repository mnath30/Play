import { useVideos } from "../../context";
import { removeVideoFromPlaylist, getVideosFromPlaylist } from "../../services";
import { useAuth } from "../../context";
import { Loader, HorizontalCard, Empty } from "../../components";
import "./user-pages.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SinglePlaylist = () => {
  const { playlistId } = useParams();
  const { authState } = useAuth();
  const { encodedToken } = authState;
  const { videoState, videoDispatch } = useVideos();
  const { loader, currentPlaylist, playlists } = videoState;
  useEffect(() => {
    if (encodedToken) {
      getVideosFromPlaylist(
        `/api/user/playlists/${playlistId}`,
        encodedToken,
        videoDispatch
      );
    }
  }, [encodedToken, videoDispatch, playlistId]);
  const removeItem = (videoId) => {
    encodedToken &&
      removeVideoFromPlaylist(
        `/api/user/playlists/${playlistId}/${videoId}`,
        encodedToken,
        playlists,
        videoDispatch
      );
  };

  return (
    <>
      {loader && <Loader />}
      {!loader && Object.keys(currentPlaylist).length !== 0 && (
        <div className="flex-col history__container">
          <div className=" flex history__header">
            <h1 className="history__container-subtitle">
              {currentPlaylist.title}
            </h1>
          </div>

          {currentPlaylist.videos.length === 0 ? (
            <Empty message="You have not added any videos to this playlist yet" />
          ) : (
            currentPlaylist.videos.map((item) => (
              <HorizontalCard
                key={item._id}
                cardItem={item}
                removeItemClickHandler={removeItem}
                pageName="singlePlaylist"
                message="Remove from Playlist"
              />
            ))
          )}
        </div>
      )}
    </>
  );
};

export { SinglePlaylist };
