import "./pop-up-menu.css";
const PopUpMenu = () => {
  return (
    <div className="menu flex-col">
      <div className="menu__list">
        <div className="menu__list-item">Save to Watch Later</div>
        <div className="menu__list-item">Save to playlist</div>
      </div>
    </div>
  );
};

export { PopUpMenu };
