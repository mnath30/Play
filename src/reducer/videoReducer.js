import { SET_VIDEOS } from "../helper/constants";

const videoReducer = (state, action) => {
  switch (action.type) {
    case SET_VIDEOS:
      return { ...state, allVideos: action.payload };

    default:
      return { ...state };
  }
};

export { videoReducer };
