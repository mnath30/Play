import "./App.css";
import { Router } from "./router/Router";
import { Navigation, Sidebar, MobileNavigation } from "./components";
import { useShowNavigation } from "./hooks/useShowNavigation";

function App() {
  const { showMobileNav, setShowMobileNav } = useShowNavigation();
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
      <div
        onClick={closeMenu}
        className={`content ${showMobileNav ? "mobile-nav__background" : ""}`}
      >
        <div className="container">
          <div className="container__sidebar">
            <Sidebar />
          </div>
          <div className="container__main">
            <Router />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
