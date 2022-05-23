import { Route, Routes } from "react-router-dom";
import {
  Home,
  VideoListing,
  WatchLater,
  History,
  LikedVideos,
  Signup,
  Login,
  Logout,
  PageNotFound,
  SingleVideo,
} from "../pages";
import { RequiresAuth } from "../helper";
import Mockman from "mockman-js";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/history"
        element={
          <RequiresAuth>
            <History />
          </RequiresAuth>
        }
      />
      <Route
        path="/likedvideos"
        element={
          <RequiresAuth>
            <LikedVideos />
          </RequiresAuth>
        }
      />
      <Route path="/explore" element={<VideoListing />} />
      <Route path="/explore/:videoId" element={<SingleVideo />} />
      <Route
        path="/watchlater"
        element={
          <RequiresAuth>
            <WatchLater />
          </RequiresAuth>
        }
      />
      <Route path="/logout" element={<Logout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mock" element={<Mockman />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export { Router };
