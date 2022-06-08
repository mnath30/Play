import "./filter.css";
import { useVideos } from "../../context";
import { APPLY_FILTER } from "../../helper/constants";

const Filter = () => {
  const { videoState, videoDispatch } = useVideos();
  const { filter } = videoState;
  const categories = ["All", "Programming", "Music", "Story", "Food"];
  return (
    <div className="filter_container">
      {categories.map((category, key) => (
        <li key={key}>
          <button
            className={`filter_chips ${
              filter === category.toLowerCase() ? "active-chips" : ""
            }`}
            onClick={() =>
              videoDispatch({ type: APPLY_FILTER, payload: category })
            }
          >
            {category}
          </button>
        </li>
      ))}
    </div>
  );
};

export { Filter };
