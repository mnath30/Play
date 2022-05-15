import { createContext, useContext } from "react";
import { useReducer } from "react";
import { videoReducer } from "../reducer";
import { initialVideoState } from "../helper";

const VideoContext = createContext({});
const useVideos = () => useContext(VideoContext);

const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(
    videoReducer,
    initialVideoState
  );
  return (
    <VideoContext.Provider value={{ videoState, videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

export { VideoProvider, useVideos };
