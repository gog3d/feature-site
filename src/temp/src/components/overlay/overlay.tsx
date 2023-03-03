import {FC} from "react";
import styles from "./overlay.module.css";

interface IComponentProps {
  onClose: () => void
}

const Overlay: FC<IComponentProps> = ({ onClose }) => {
  return <div onClick={onClose} className={styles.overlay} />;
};

export default Overlay;