import "./video-listing.css";
import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Loader, VideoCard, Error, Filter } from "../../components";
import { useVideos } from "../../context";
import { SET_VIDEOS } from "../../helper/constants";

const VideoListing = () => {
  const { videoState, videoDispatch } = useVideos();
  const { allVideos, filter } = videoState;
  const { loader, videoData, error } = useFetch("/api/videos");
  useEffect(() => {
    videoDispatch({ type: SET_VIDEOS, payload: videoData });
  }, [videoData, videoDispatch]);

  const filteredVideos =
    filter !== "all"
      ? allVideos.filter(
          (video) => video.category.toLowerCase() === filter.toLowerCase()
        )
      : allVideos;

  return (
    <>
      <Filter />
      <div className="flex video__container">
        {loader && <Loader />}
        {filteredVideos.length !== 0 &&
          filteredVideos.map((item, key) => (
            <VideoCard videoDetails={item} key={key} />
          ))}
        {error && (
          <Error message="There was some error in fetching the videos" />
        )}
      </div>
    </>
  );
};

export { VideoListing };
