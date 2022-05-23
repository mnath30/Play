import axios from "axios";
import { ERROR, LOADING, UPDATE_LIKED } from "../helper/constants";

const getLiked = async (url, token, videoDispatch) => {
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
    if (response.status === 200 || response.status === 201) {
      videoDispatch({ type: UPDATE_LIKED, payload: response.data.likes });
    }
  } catch (err) {
    videoDispatch({
      type: ERROR,
      payload: "There was some error in processing your request",
    });
  }
};

const addToLiked = async (url, token, body, videoDispatch) => {
  try {
    let response;
    response = await axios({
      method: "POST",
      url: url,
      data: {
        video: body,
      },
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200 || response.status === 201) {
      videoDispatch({ type: UPDATE_LIKED, payload: response.data.likes });
    }
  } catch (err) {
    videoDispatch({
      type: ERROR,
      payload: "There was some error in processing your request",
    });
  }
};

const deleteFromLiked = async (url, token, videoDispatch) => {
  try {
    let response;
    response = await axios({
      method: "DELETE",
      url: url,
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200 || response.status === 201) {
      videoDispatch({ type: UPDATE_LIKED, payload: response.data.likes });
    }
  } catch (err) {
    videoDispatch({
      type: ERROR,
      payload: "There was some error in processing your request",
    });
  }
};

export { getLiked, addToLiked, deleteFromLiked };
