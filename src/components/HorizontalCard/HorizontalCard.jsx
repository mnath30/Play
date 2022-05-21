import "./horizontal-card.css";
import { Link } from "react-router-dom";

const HorizontalCard = ({ cardItem, removeItemClickHandler }) => {
  const { title, creator, views, img, _id, description } = cardItem;
  const descriptionNew =
    description.length > 72 ? description.slice(0, 73) + "..." : description;

  return (
    <div className="horiz__card flex">
      <div className="horiz__card-img">
        <Link to={`/explore/${_id}`}>
          <img src={img} alt="title" className="card-img" />
        </Link>
      </div>

      <div className="horiz__card-details flex-col">
        <div title={title} className="flex ">
          <Link to={`/explore/${_id}`}>
            <h2 className="horiz__card-title">{title}</h2>
          </Link>
          <button
            className="secondary__btn history-btn"
            onClick={() => removeItemClickHandler(_id)}
          >
            <i className="fa-solid fa-xmark secondary__btn-icon"></i>
          </button>
        </div>
        <div className="horiz__card-info flex">
          <span>{creator}</span>
          <span className="dot"></span>
          <span>{views} views</span>
        </div>
        <div className="horiz__card-description">{descriptionNew}</div>
      </div>
    </div>
  );
};

export { HorizontalCard };
