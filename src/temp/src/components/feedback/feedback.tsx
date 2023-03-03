import React, { FC } from "react";
import styles from "./feedback.module.css";

interface IFeedBackProps {
  name: string;
  children: JSX.Element;
}

const Feedback:FC<IFeedBackProps> = ({name, children}) => {
  return (
    <div className={styles.feedback}>
      <h2 className={styles.title}>
          {name}
      </h2>
      <div className={styles.text}>
        {children}
      </div>
    </div>
  );
};

export default Feedback;