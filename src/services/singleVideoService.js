import axios from "axios";
import { LOADING, DISPLAY_VIDEO, ERROR } from "../helper/constants";

const singleVideoService = async (url, videoDispatch) => {
  try {
    let response;
    videoDispatch({ type: LOADING });
    response = await axios.get(url);
    if (response.status === 200) {
      videoDispatch({ type: DISPLAY_VIDEO, payload: response.data.video });
    }
  } catch (err) {
    videoDispatch({
      type: ERROR,
      payload: "We could not find what you were looking for",
    });
  }
};

export { singleVideoService };
