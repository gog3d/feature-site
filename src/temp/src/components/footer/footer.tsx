import React from "react";
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <a href="/" className={styles.item}><li>Главная</li></a>
            <a href="/" className={styles.item}><li>Все курсы</li></a>
            <a href="/" className={styles.item}><li>Контакты</li></a>
          </ul>
          <p className={styles.text}>
            Любое копирование материалов сайта допускается только с разрешения правообладателя
          </p>
          <a href="/" className={styles.link}>
            Пользовательское соглашение
          </a>
          <div className={styles.made}>
            <p>Сделано&nbsp;<a href="/" className={styles.link}>WCDE.studio</a></p>
            <p>2022</p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Footer;