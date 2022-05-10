import "./navigation.css";

const Navigation = ({ setShowMobileNav }) => {
  return (
    <nav className="flex nav">
      <span
        className="nav__menu"
        onClick={() => {
          setShowMobileNav((show) => !show);
        }}
      >
        <i className="fa-solid fa-bars fa-xl"></i>
      </span>
      <span className="nav__logo padding-sm">
        <img src="../../favicon.ico" className="img-logo" alt="logo" />
      </span>
      <h3 className="nav__brand">Play</h3>
      <span className="padding-sm nav__search flex">
        <input
          type="text"
          placeholder="Search by title or categories..."
          className="nav__search--input"
        />
        <button className="nav__search--btn">
          <i className="fa-solid fa-magnifying-glass fa-xl"></i>
        </button>
      </span>
      <span className="padding-sm secondary__btn-login">
        <button className="secondary__btn ">
          <i className="fa-regular fa-user secondary__btn-icon"></i>SIGN IN
        </button>
      </span>
    </nav>
  );
};

export { Navigation };
