import React from 'react';
import style from './footer-desktop.module.css';
import { Link } from 'react-router-dom';

/*
<li className={style.item}><a href="/" className={style.link}>Главная</a></li>
<li className={style.item}><a href="/courses" className={style.link}>Все курсы</a></li>
<li className={style.item}><a href="/contacts" className={style.link}>Контакты</a></li>
*/

const FooterDesktop = () => {
  return (
    <footer className={style.container}>
      <div className={style.footer}>
        <nav className={style.nav}>
          <ul className={style.list}>
            <li className={style.item}><Link to="/" className={style.link}>Главная</Link></li>
            <li className={style.item}><Link to="/courses" className={style.link}>Все курсы</Link></li>
            <li className={style.item}><Link to="/contacts" className={style.link}>Контакты</Link></li>
          </ul>
        </nav>
        <p className={style.text}>Любое копирование материалов сайта допускается только с разрешения правообладателя</p>
        <p className={style.text}>
          <a href="/" className={style.link}>Пользовательское соглашение</a>
        </p>
        <div className={style.made}>
          <p className={style.text}>
            <a href="/" className={style.link}>
              Сделано WCDE.studio 2022
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default FooterDesktop;