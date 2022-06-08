import "./App.css";
import { Router } from "./router/Router";
import {
  Navigation,
  Sidebar,
  MobileNavigation,
  OverlayBackground,
} from "./components";
import { useShowNavigation } from "./hooks/useShowNavigation";
import { useModal } from "./context";

function App() {
  const { showMobileNav, setShowMobileNav } = useShowNavigation();
  const { openPlaylist, showPlaylist, hidePlaylist } = useModal();
  const { displayPlaylist } = openPlaylist;

  const closeMenu = () => {
    if (showMobileNav) {
      setShowMobileNav((show) => !show);
    }
  };

  return (
    <div className="App">
      {showMobileNav && (
        <MobileNavigation setShowMobileNav={setShowMobileNav} />
      )}
      <Navigation setShowMobileNav={setShowMobileNav} />
      <div className="container">
        <div className="container__sidebar">
          <Sidebar />
        </div>
        <div className="container__main">
          <Router />
        </div>
      </div>
      <div
        onClick={closeMenu}
        className={`content ${showMobileNav ? "mobile-nav__background" : ""}`}
      ></div>
      {displayPlaylist && (
        <OverlayBackground
          displayPlaylist={showPlaylist}
          closePlaylist={hidePlaylist}
        />
      )}
    </div>
  );
}

export default App;
