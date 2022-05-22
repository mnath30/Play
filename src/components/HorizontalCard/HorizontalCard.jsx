import "./horizontal-card.css";
import { Link } from "react-router-dom";

const HorizontalCard = ({
  cardItem,
  removeItemClickHandler,
  pageName,
  message,
}) => {
  const { title, creator, views, img, _id, description } = cardItem;
  const descriptionNew =
    description.length > 72 ? description.slice(0, 73) + "..." : description;
  let icon;
  if (pageName === "history") {
    icon = <i className="fa-solid fa-xmark secondary__btn-icon"></i>;
  } else if (pageName === "liked") {
    icon = <i class="fa-regular fa-thumbs-down"></i>;
  }

  return (
    <div className="horiz__card flex">
      <div className="horiz__card-img">
        <Link to={`/explore/${_id}`}>
          <img src={img} alt="title" className="card-img" />
        </Link>
      </div>

      <div className="horiz__card-details flex-col">
        <div className="flex ">
          <Link to={`/explore/${_id}`}>
            <div title={title}>
              <h2 className="horiz__card-title">{title}</h2>
            </div>
          </Link>

          <button
            className="secondary__btn remove-btn"
            onClick={() => removeItemClickHandler(_id)}
          >
            <span className="tooltip">{message}</span>
            {icon}
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
