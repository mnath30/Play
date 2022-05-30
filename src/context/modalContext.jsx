import { createContext, useContext, useState } from "react";

const modalContext = createContext(false);
const useModal = () => useContext(modalContext);

const ModalProvider = ({ children }) => {
  const [openPlaylist, setOpenPlaylist] = useState({
    displayPlaylist: false,
    videoContent: {},
  });
  const showPlaylist = (content = {}) => {
    setOpenPlaylist((prevState) => ({
      ...prevState,
      displayPlaylist: true,
      videoContent: { ...content },
    }));
  };
  const hidePlaylist = () => {
    setOpenPlaylist((prevState) => ({
      ...prevState,
      displayPlaylist: false,
      videoContent: {},
    }));
  };

  return (
    <modalContext.Provider
      value={{
        openPlaylist,
        showPlaylist,
        hidePlaylist,
      }}
    >
      {children}
    </modalContext.Provider>
  );
};

export { ModalProvider, useModal };
