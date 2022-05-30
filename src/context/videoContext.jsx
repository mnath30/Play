import { createContext, useContext, useReducer, useEffect } from "react";
import { videoReducer } from "../reducer";
import { initialVideoState } from "../helper";
import { useFetch } from "../hooks/useFetch";
import { SET_VIDEOS } from "../helper/constants";
import { useAuth } from "./authContext";
import {
  getAllPlaylists,
  getHistory,
  getLiked,
  getWatchLater,
} from "../services";

const videoContext = createContext({});
const useVideos = () => useContext(videoContext);

const VideoProvider = ({ children }) => {
  const { authState } = useAuth();
  const { encodedToken, isLoggedIn } = authState;
  const [videoState, videoDispatch] = useReducer(
    videoReducer,
    initialVideoState
  );
  const { videoData } = useFetch("/api/videos");
  useEffect(() => {
    videoDispatch({ type: SET_VIDEOS, payload: videoData });
    if (isLoggedIn) {
      getHistory("/api/user/history", encodedToken, videoDispatch);
      getLiked("/api/user/likes", encodedToken, videoDispatch);
      getWatchLater("/api/user/watchlater", encodedToken, videoDispatch);
      getAllPlaylists("/api/user/playlists", encodedToken, videoDispatch);
    }
  }, [videoDispatch, videoData, encodedToken, isLoggedIn]);

  return (
    <videoContext.Provider value={{ videoState, videoDispatch }}>
      {children}
    </videoContext.Provider>
  );
};

export { VideoProvider, useVideos };
