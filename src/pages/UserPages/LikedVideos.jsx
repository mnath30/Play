import { useVideos, useAuth } from "../../context";
import { getLiked, deleteFromLiked } from "../../services";
import { Loader, HorizontalCard, Empty } from "../../components";
import "./user-pages.css";
import { useEffect } from "react";

const LikedVideos = () => {
  const { authState } = useAuth();
  const { encodedToken } = authState;
  const { videoState, videoDispatch } = useVideos();
  const { loader, likedVideos } = videoState;

  useEffect(() => {
    if (encodedToken) {
      getLiked("/api/user/likes", encodedToken, videoDispatch);
    }
  }, [encodedToken, videoDispatch]);

  const removeLikedVideo = (videoId) => {
    encodedToken &&
      deleteFromLiked(
        `/api/user/likes/${videoId}`,
        encodedToken,
        videoDispatch
      );
  };

  return (
    <>
      {loader && <Loader />}
      {!loader && likedVideos.length === 0 && (
        <Empty message="You have not liked any videos yet" />
      )}
      {!loader && likedVideos.length !== 0 && (
        <div className="flex-col history__container">
          <div className=" flex history__header">
            <h1 className="history__container-title">Liked Videos</h1>
          </div>

          {likedVideos.map((item) => (
            <HorizontalCard
              key={item._id}
              cardItem={item}
              removeItemClickHandler={removeLikedVideo}
              pageName="liked"
              message="Remove from Liked Videos"
            />
          ))}
        </div>
      )}
    </>
  );
};

export { LikedVideos };
