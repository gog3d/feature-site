import { Link } from "react-router-dom";
import styles from "./header-desktop.module.css";
import LogoDesktop from "../ui/icons/logo-desktop";
import MenuDesktop from "../menu/menu-desktop"

const HeaderDesktop = () => {
  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <Link className={styles.logo} to="/">
          <LogoDesktop />
          <p className={styles.text}>
            Проектирование жизни и бизнеса
          </p>
        </Link>
        <MenuDesktop />
      </div>
    </header>
  );
};

export default HeaderDesktop;