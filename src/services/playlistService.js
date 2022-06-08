import axios from "axios";
import {
  ERROR,
  LOADING,
  UPDATE_ALL_PLAYLISTS,
  UPDATE_CURRENT_PLAYLIST,
} from "../helper/constants";
import { updateExistingPlaylist } from "../helper";

const getAllPlaylists = async (url, token, videoDispatch) => {
  try {
    let response;
    videoDispatch({ type: LOADING });
    response = await axios({
      method: "GET",
      url: url,
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      videoDispatch({
        type: UPDATE_ALL_PLAYLISTS,
        payload: response.data.playlists,
      });
    }
  } catch (err) {
    videoDispatch({
      type: ERROR,
      payload: "There was some error in processing your request",
    });
  }
};

const addNewPlaylist = async (url, token, body, videoDispatch) => {
  try {
    let response;
    response = await axios({
      method: "POST",
      url: url,
      headers: {
        authorization: token,
      },
      data: {
        playlist: body,
      },
    });
    if (response.status === 201) {
      videoDispatch({
        type: UPDATE_ALL_PLAYLISTS,
        payload: response.data.playlists,
      });
    }
  } catch (err) {
    videoDispatch({
      type: ERROR,
      payload: "There was some error in processing your request",
    });
  }
};

const removePlaylist = async (url, token, videoDispatch) => {
  try {
    let response;
    videoDispatch({ type: LOADING });
    response = await axios({
      method: "DELETE",
      url: url,
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      videoDispatch({
        type: UPDATE_ALL_PLAYLISTS,
        payload: response.data.playlists,
      });
    }
  } catch (err) {
    videoDispatch({
      type: ERROR,
      payload: "There was some error in processing your request",
    });
  }
};

const getVideosFromPlaylist = async (url, token, videoDispatch) => {
  try {
    let response;
    videoDispatch({ type: LOADING });
    response = await axios({
      method: "GET",
      url: url,
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      videoDispatch({
        type: UPDATE_CURRENT_PLAYLIST,
        payload: response.data.playlist,
      });
    }
  } catch (err) {
    videoDispatch({
      type: ERROR,
      payload: "There was some error in processing your request",
    });
  }
};

const addVideoToPlaylist = async (
  url,
  token,
  body,
  playlist,
  videoDispatch
) => {
  try {
    let response;
    response = await axios({
      method: "POST",
      url: url,
      headers: {
        authorization: token,
      },
      data: {
        video: body,
      },
    });
    if (response.status === 201) {
      videoDispatch({
        type: UPDATE_CURRENT_PLAYLIST,
        payload: response.data.playlist,
      });
      const updatedList = updateExistingPlaylist(
        response.data.playlist,
        playlist
      );
      videoDispatch({
        type: UPDATE_ALL_PLAYLISTS,
        payload: updatedList,
      });
    }
  } catch (err) {
    videoDispatch({
      type: ERROR,
      payload: "There was some error in processing your request",
    });
  }
};

const removeVideoFromPlaylist = async (url, token, playlist, videoDispatch) => {
  try {
    let response;
    response = await axios({
      method: "DELETE",
      url: url,
      headers: {
        authorization: token,
      },
    });

    if (response.status === 200) {
      videoDispatch({
        type: UPDATE_CURRENT_PLAYLIST,
        payload: response.data.playlist,
      });
      const updatedPlaylist = updateExistingPlaylist(
        response.data.playlist,
        playlist
      );
      videoDispatch({
        type: UPDATE_ALL_PLAYLISTS,
        payload: updatedPlaylist,
      });
    }
  } catch (err) {
    videoDispatch({
      type: ERROR,
      payload: "There was some error in processing your request",
    });
  }
};

export {
  addNewPlaylist,
  removePlaylist,
  getAllPlaylists,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
  getVideosFromPlaylist,
};
