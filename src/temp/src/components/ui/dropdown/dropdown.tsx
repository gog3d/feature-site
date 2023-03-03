import React, { FC, ReactNode, useRef} from "react";
import styles from "./dropdown.module.css";

interface IDropdownProps {
  title: string;
  children: ReactNode;
  titleStyle?: string;
}

const Dropdown: FC<IDropdownProps> = ({ title, children, titleStyle }) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    btnRef.current?.classList.toggle(styles.active);
    bodyRef.current?.classList.toggle(styles.visible)
  };

  return (
    <div className={styles.dropdown} onClick={toggleDropdown}>
      <button className={styles.button} ref={btnRef}>
        <div className={titleStyle}>
          {title}
        </div>
        <div className={styles.arrow} />
      </button>
      <div className={styles.body} ref={bodyRef}>{children}</div>
    </div>
  );
};

export default Dropdown;
