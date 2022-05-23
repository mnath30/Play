import { useVideos } from "../../context";
import { getHistory, deleteHistory } from "../../services";
import { useAuth } from "../../context";
import { Loader, HorizontalCard, Empty } from "../../components";
import "./user-pages.css";
import { useEffect } from "react";

const History = () => {
  const { authState } = useAuth();
  const { encodedToken } = authState;
  const { videoState, videoDispatch } = useVideos();
  const { loader, history } = videoState;
  useEffect(() => {
    if (encodedToken) {
      getHistory("/api/user/history", encodedToken, videoDispatch);
    }
  }, [encodedToken, videoDispatch]);
  const removeItem = (videoId) => {
    encodedToken &&
      deleteHistory(
        `/api/user/history/${videoId}`,
        encodedToken,
        videoDispatch
      );
  };
  const removeAllItems = () => {
    encodedToken &&
      deleteHistory(`/api/user/history/all`, encodedToken, videoDispatch);
  };

  return (
    <>
      {loader && <Loader />}
      {!loader && history.length === 0 && (
        <Empty message="You have not watched any videos yet" />
      )}
      {!loader && history.length !== 0 && (
        <div className="flex-col history__container">
          <div className=" flex history__header">
            <h1 className="history__container-title">Watch History </h1>
            <button
              className="secondary__btn  history__container-btn"
              onClick={removeAllItems}
            >
              CLEAR ALL
            </button>
          </div>

          {history.map((item) => (
            <HorizontalCard
              key={item._id}
              cardItem={item}
              removeItemClickHandler={removeItem}
              pageName="history"
              message="Remove from History"
            />
          ))}
        </div>
      )}
    </>
  );
};

export { History };
