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
} from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
      <Route path="/likedvideos" element={<LikedVideos />} />
      <Route path="/explore" element={<VideoListing />} />
      <Route path="/watchlater" element={<WatchLater />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export { Router };
