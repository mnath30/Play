import { createContext, useContext } from "react";
import { useReducer } from "react";
import { videoReducer } from "../reducer";
import { initialVideoState } from "../helper";

const videoContext = createContext({});
const useVideos = () => useContext(videoContext);

const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(
    videoReducer,
    initialVideoState
  );
  return (
    <videoContext.Provider value={{ videoState, videoDispatch }}>
      {children}
    </videoContext.Provider>
  );
};

export { VideoProvider, useVideos };
