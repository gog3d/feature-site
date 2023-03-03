import { Link } from "react-router-dom";
import styles from "./header.module.css"
import Logo from "../ui/icons/logo";
import Menu from "../menu/menu";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link className={styles.logo} to="/">
          <Logo />
          <p className={styles.text}>
            Проектирование жизни и бизнеса
          </p>
        </Link>
        <Menu />
      </div>
    </div>
  );
};

export default Header;