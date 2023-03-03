import React, { FC } from "react";
import styles from "./course-desktop.module.css"

interface ICourseDesktop {
  title: string;
  desc: string;
}
const CourseDesktop:FC<ICourseDesktop> = ({title, desc}) => {
  return (
    <div className={styles.course}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
};

export default CourseDesktop;