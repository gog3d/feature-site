import React from "react";
import { Link } from "react-router-dom";
import styles from "./menu-desktop.module.css";


const MenuDesktop = () => {

  return (
    <div className="menu">
      <ul className={styles["menu__box"]}>
        <li>
          <Link className={styles["menu__item"]} to="/">
            Главная
          </Link>
        </li>
        <li>
          <Link className={styles["menu__item"]} to="/courses">
            Все курсы
          </Link>
        </li>
        <li>
          <Link className={styles["menu__item"]} to="/contacts">
            Контакты
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuDesktop;
