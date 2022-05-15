import "./video-listing.css";
import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Loader, VideoCard, Error } from "../../components";
import { useVideos } from "../../context";
import { SET_VIDEOS } from "../../helper/constants";

const VideoListing = () => {
  const { videoState, videoDispatch } = useVideos();
  const { allVideos } = videoState;
  const { loader, videoData, error } = useFetch("/api/videos");
  useEffect(() => {
    videoDispatch({ type: SET_VIDEOS, payload: videoData });
  }, [videoData, videoDispatch]);

  return (
    <div className={`flex video__container {showMobileNav? "no-scroll":""}`}>
      {loader && <Loader />}
      {allVideos !== [] &&
        allVideos.map((item) => <VideoCard videoDetails={item} />)}
      {error && <Error message="There was some error in fetching the videos" />}
    </div>
  );
};

export { VideoListing };
