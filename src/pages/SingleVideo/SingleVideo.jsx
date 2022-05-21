import "./single-video.css";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { useVideos } from "../../context";
import { Loader, Error, VideoCard } from "../../components";
import { useEffect } from "react";
import { singleVideoService, addToHistory } from "../../services";
import { findSuggestedVideos } from "../../helper";
import { useAuth } from "../../context";

const SingleVideo = () => {
  const { authState } = useAuth();
  const { encodedToken, isLoggedIn } = authState;
  const { videoId } = useParams();
  const { videoState, videoDispatch } = useVideos();
  const { allVideos, currentVideo, error, loader } = videoState;
  useEffect(() => {
    singleVideoService(`/api/video/${videoId}`, videoDispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  const { url, title, description, creator, views, thumbnail } = currentVideo;

  let suggestedVideos = [];
  if (allVideos.length !== 0) {
    suggestedVideos = findSuggestedVideos(allVideos, videoId);
  }

  useEffect(() => {
    if (Object.keys(currentVideo).length !== 0 && isLoggedIn) {
      if (!error && currentVideo._id === videoId) {
        addToHistory(
          "/api/user/history",
          encodedToken,
          currentVideo,
          videoDispatch
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId, currentVideo]);

  return (
    <>
      {loader && <Loader />}
      {error && <Error message={error} />}
      {!loader && !error && (
        <div className="flex video__container">
          <div className="single-video__container flex-col">
            {currentVideo !== {} && (
              <ReactPlayer url={url} controls width="100%" />
            )}
            <h2 className="single-video__title">{title}</h2>
            <div className="flex single-video__info">
              <span>{views} views</span>
              <button className="secondary__btn">
                <i className="fa-regular fa-thumbs-up fa-lg secondary__btn-icon"></i>
                Like
              </button>
              <button className="secondary__btn">
                <i className="fa-solid fa-file-circle-plus secondary__btn-icon"></i>
                Save
              </button>
            </div>
            <div className="flex">
              <img
                src={thumbnail}
                alt="thumbnail"
                className="card__thumbnail-img"
              />
              <h4>{creator}</h4>
            </div>
            <p className="single-video__description">{description}</p>
          </div>
          <div className="related-video__container">
            {suggestedVideos.length !== 0 &&
              suggestedVideos.map((item, key) => (
                <VideoCard videoDetails={item} key={key} />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export { SingleVideo };
