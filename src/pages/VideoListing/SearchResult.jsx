import "./video-listing.css";
import { useVideos } from "../../context";
import { Empty, VideoCard } from "../../components";

const SearchResult = () => {
  const { videoState } = useVideos();
  const { allVideos, search } = videoState;

  const searchVideos =
    search !== ""
      ? allVideos.filter(
          (video) =>
            video.title.toLowerCase().includes(search) ||
            video.creator.toLowerCase().includes(search)
        )
      : [];

  return (
    <div className="flex video__container">
      {searchVideos.length === 0 && search !== "" && (
        <Empty message={`No results found for the search criteria ${search}`} />
      )}
      {searchVideos.length === 0 && search === "" && (
        <Empty message="Enter some search value" />
      )}
      {searchVideos.length !== 0 &&
        searchVideos.map((item, key) => (
          <VideoCard videoDetails={item} key={key} />
        ))}
    </div>
  );
};

export { SearchResult };
