import "./style.css";
export const Menu = ({ setSideBarActive }) => {
  const sidebar__open = () => {
    setSideBarActive(true);
  };

  return (
    <div className="menu" onClick={() => sidebar__open()}>
      <div className="menu__item"></div>
      <div className="menu__item"></div>
      <div className="menu__item"></div>
    </div>
  );
};
