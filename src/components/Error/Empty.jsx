import "./error.css";
import { empty_page } from "../../asset";

const Empty = ({ message }) => {
  return (
    <div className="error__container flex-col">
      <div className="error__container-img">
        <img src={empty_page} alt="error-page" className="error-img" />
      </div>
      <p className="error-msg">{message}</p>
    </div>
  );
};

export { Empty };
