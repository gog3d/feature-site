import {FC} from "react";
import styles from "./icons.module.css"
interface IProps {
  onClick: () => void;
}
const ArrowDesktop: FC<IProps> = ({ onClick }) => {
  return (
    <svg className={styles.arrow} onClick={onClick} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.35 14.3165L10 16.6665L20 26.6665L30 16.6665L27.65 14.3165L20 21.9498L12.35 14.3165Z" fill="#444444"/>
    </svg>
  );
};

export default ArrowDesktop;