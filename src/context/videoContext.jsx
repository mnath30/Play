import { createContext, useContext } from "react";
import { useReducer } from "react";
import { videoReducer } from "../reducer";
import { initialVideoState } from "../helper";
import { useFetch } from "../hooks/useFetch";
import { SET_VIDEOS } from "../helper/constants";
import { useAuth } from "./authContext";
import { useEffect } from "react";
import { getHistory } from "../services";

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
    isLoggedIn && getHistory("/api/user/history", encodedToken, videoDispatch);
  }, [videoDispatch, videoData, encodedToken, isLoggedIn]);

  return (
    <videoContext.Provider value={{ videoState, videoDispatch }}>
      {children}
    </videoContext.Provider>
  );
};

export { VideoProvider, useVideos };
