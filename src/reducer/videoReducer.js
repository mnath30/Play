import {
  SET_VIDEOS,
  DISPLAY_VIDEO,
  LOADING,
  ERROR,
  UPDATE_HISTORY,
  DELETE_HISTORY,
  LOGOUT,
  UPDATE_LIKED,
  UPDATE_WATCH_LATER,
  UPDATE_ALL_PLAYLISTS,
  UPDATE_CURRENT_PLAYLIST,
} from "../helper/constants";

const videoReducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loader: true, error: null };
    case SET_VIDEOS:
      return {
        ...state,
        loader: false,
        allVideos: [...action.payload],
        error: null,
      };
    case DISPLAY_VIDEO:
      return {
        ...state,
        loader: false,
        currentVideo: { ...action.payload },
        error: null,
      };
    case UPDATE_HISTORY:
      return {
        ...state,
        loader: false,
        error: null,
        history: [...action.payload],
      };
    case DELETE_HISTORY:
      return {
        ...state,
        loader: false,
        error: null,
        history: [...action.payload],
      };
    case UPDATE_LIKED:
      return {
        ...state,
        loader: false,
        error: null,
        likedVideos: [...action.payload],
      };
    case UPDATE_WATCH_LATER:
      return {
        ...state,
        loader: false,
        error: null,
        watchLater: [...action.payload],
      };
    case UPDATE_ALL_PLAYLISTS:
      return {
        ...state,
        loader: false,
        error: null,
        playlists: [...action.payload],
      };
    case UPDATE_CURRENT_PLAYLIST:
      return {
        ...state,
        loader: false,
        error: null,
        currentPlaylist: { ...action.payload },
      };
    case ERROR:
      return {
        ...state,
        loader: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        loader: false,
        error: null,
        history: [],
        likedVideos: [],
        watchLater: [],
        playlists: [],
        currentPlaylist: [],
      };

    default:
      return { ...state };
  }
};

export { videoReducer };
