import React, { useContext, useRef, MouseEvent } from "react";
import { Link } from "react-router-dom";
import "./menu.css";
import { AppContext } from "../../services/context";

const Menu = () => {
  const menuRef = useRef<HTMLInputElement | null>(null);
  const { context, setContext } = useContext(AppContext);

  const toggleMenu = () => {
    if (context.menu) {
      setContext({ ...context, menu: false });
    } else {
      setContext({ ...context, menu: true });
    }
  };

  const handleMenu = (e: MouseEvent) => {
    if (menuRef.current === null) return;
    if ((e.target as Element).className === "menu__item") {
      menuRef.current.checked = false;
      setContext({ ...context, menu: false });
    }

  };

  return (
    <div className="menu">
      <input
        id="menu__toggle"
        ref={menuRef}
        type="checkbox"
        onChange={toggleMenu}
      />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      <ul className="menu__box" onClick={handleMenu}>
        <li>
          <Link className="menu__item" to="/">
            Главная
          </Link>
        </li>
        <li>
          <Link className="menu__item" to="/courses">
            Все курсы
          </Link>
        </li>
        <li>
          <Link className="menu__item" to="/contacts">
            Контакты
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
