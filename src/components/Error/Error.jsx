import "./error.css";
import { error_page } from "../../asset";

const Error = ({ message }) => {
  return (
    <div className="error__container flex-col">
      <div className="error__container-img">
        <img src={error_page} alt="error-page" className="error-img" />
      </div>
      <p className="error-msg">{message}</p>
    </div>
  );
};

export { Error };
