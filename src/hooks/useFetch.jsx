import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const useFetch = (url) => {
  const [loader, setLoader] = useState(false);
  const [videoData, setVideoData] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoader(true);
        setError(false);
        const data = await axios.get(url);
        if (data.status === 200) {
          setLoader(false);
          setError(false);
          setVideoData(data.data.videos);
        }
      } catch (err) {
        setLoader(false);
        setError(true);
      }
    };
    getData();
  }, []);
  return { loader, videoData, error };
};

export { useFetch };
