import { FC, useEffect } from "react";
import styles from "./modal-category.module.css";
import ReactDOM from "react-dom";
import Overlay from "../overlay/overlay";
import { Cross } from "../ui/icons";
import Radio from "../ui/radio/radio";
interface IModalCategory {
  onClose: () => void;
}
const ModalCategory: FC<IModalCategory> = ({ onClose }) => {
  const escapeModal = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", escapeModal);
    return () => {
      document.removeEventListener("keydown", escapeModal);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <Overlay onClose={onClose} />
      <div className={styles.modal}>
        <div className={styles.cross} onClick={onClose}>
          <Cross />
        </div>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Тематика курса</h1>
          <Radio value={"all"} name={"Все курсы"}/>
          <Radio value={"esoteric"} name={"Эзотерика"}/>
          <Radio value={"business"} name={"Бизнес"}/>
        </div>

      </div>
    </>,
    document.getElementById("course_category") as HTMLElement
  );
};

export default ModalCategory;
