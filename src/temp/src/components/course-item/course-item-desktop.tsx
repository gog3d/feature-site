import React, { FC } from 'react';
import { Link } from "react-router-dom";
import styles from "./course-item-desktop.module.css";
import image from "../../images/photo.png"
import { Calendar, Clock, Place } from "../ui/icons";
import { TCourse } from '../../services/data/data-types';

interface ICourse {
  course: TCourse
}

const CourseItemDesktop: FC<ICourse> = ({ course }) => {
  return (
    <Link to="/courses/1" className={styles.course}>
      <div className={styles.img}>
        <img 
          src={require(`../../images/desktop/${course.course_img}`)}
          alt="картинка курса"
        />
      </div>
      <div className={styles.description}>
        <h1 className={styles.title}>{course.name}</h1>
        <div className={styles.info}>
            <div className={styles.point}>
              <Calendar />
              <div className={styles.ml8} />
              <p className={styles.text}>{course.date.full}</p>
            </div>
            <div className={styles.point}>
              <Place />
              <div className={styles.ml8} />
              <p className={styles.text}>{course.place}</p>
            </div>
            <div className={styles.point}>
              <Clock />
              <div className={styles.ml8} />
              <p className={styles.text}>{course.clock}</p>
            </div>
        </div>
        <div className={styles.subtitle}>Цель курса:</div>
        <p className={styles.about}>
          {course.about}
        </p>
      </div>
    </Link>
  );
};

export default CourseItemDesktop;