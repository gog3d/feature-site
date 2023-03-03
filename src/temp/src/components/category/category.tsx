import React, { FC, ReactNode } from "react";
import styles from "./category.module.css";

interface ICategoryProps {
  title: string;
  children: ReactNode;
}
const Category: FC<ICategoryProps> = ({ title, children }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.category}>
        {children}
      </div>
    </div>
  );
};

export default Category;
