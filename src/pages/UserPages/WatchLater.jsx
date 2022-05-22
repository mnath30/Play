import { useVideos } from "../../context";
import { getWatchLater, removeFromWatchLater } from "../../services";
import { useAuth } from "../../context";
import { Loader, HorizontalCard, Empty } from "../../components";
import "./user-pages.css";
import { useEffect } from "react";

const WatchLater = () => {
  const { authState } = useAuth();
  const { encodedToken } = authState;
  const { videoState, videoDispatch } = useVideos();
  const { loader, watchLater } = videoState;
  useEffect(() => {
    if (encodedToken) {
      getWatchLater("/api/user/watchlater", encodedToken, videoDispatch);
    }
  }, [encodedToken, videoDispatch]);

  const removeWatchLater = (videoId) => {
    encodedToken &&
      removeFromWatchLater(
        `/api/user/watchlater/${videoId}`,
        encodedToken,
        videoDispatch
      );
  };

  return (
    <>
      {loader && <Loader />}
      {!loader && watchLater.length === 0 && (
        <Empty message="You have not added any videos to Watch Later yet" />
      )}
      {!loader && watchLater.length !== 0 && (
        <div className="flex-col history__container">
          <div className=" flex history__header">
            <h1 className="history__container-title">Watch History </h1>
          </div>

          {watchLater.map((item) => (
            <HorizontalCard
              key={item._id}
              cardItem={item}
              removeItemClickHandler={removeWatchLater}
              pageName="watchlater"
              message="Remove from Watch Later"
            />
          ))}
        </div>
      )}
    </>
  );
};

export { WatchLater };
