import axios from "axios";
import { ERROR, LOADING, UPDATE_WATCH_LATER } from "../helper/constants";

const getWatchLater = async (url, token, videoDispatch) => {
  try {
    videoDispatch({ type: LOADING });
    let response;
    response = await axios({
      method: "GET",
      url: url,
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      videoDispatch({
        type: UPDATE_WATCH_LATER,
        payload: response.data.watchlater,
      });
    }
  } catch (err) {
    videoDispatch({
      type: ERROR,
      payload: "There was some error in processing your request",
    });
  }
};

const addToWatchLater = async (url, token, body, videoDispatch) => {
  try {
    let response;
    videoDispatch({ type: LOADING });
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
        type: UPDATE_WATCH_LATER,
        payload: response.data.watchlater,
      });
    }
  } catch (err) {
    videoDispatch({
      type: ERROR,
      payload: "There was some error in processing your request",
    });
  }
};

const removeFromWatchLater = async (url, token, videoDispatch) => {
  try {
    videoDispatch({ type: LOADING });
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
        type: UPDATE_WATCH_LATER,
        payload: response.data.watchlater,
      });
    }
  } catch (err) {
    videoDispatch({
      type: ERROR,
      payload: "There was some error in processing your request",
    });
  }
};

export { getWatchLater, addToWatchLater, removeFromWatchLater };
