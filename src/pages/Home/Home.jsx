import { Header, VideoCard } from "../../components";
import "./home.css";
import { useVideos } from "../../context";
import { SET_VIDEOS } from "../../helper/constants";
import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";

const Home = () => {
  const { videoState, videoDispatch } = useVideos();
  const { allVideos } = videoState;
  const { videoData } = useFetch("/api/videos");
  let trendingVideos = [];

  useEffect(() => {
    videoDispatch({ type: SET_VIDEOS, payload: videoData });
  }, [videoData, videoDispatch]);
  if (allVideos.length !== 0) {
    trendingVideos = allVideos.slice(0, 6);
  }

  return (
    <>
      <div className="home__container">
        <Header />
        <h3>Trending Videos</h3>
        <div className="home__content flex">
          {trendingVideos.length !== 0 &&
            trendingVideos.map((item) => <VideoCard videoDetails={item} />)}
        </div>
      </div>
    </>
  );
};

export { Home };
