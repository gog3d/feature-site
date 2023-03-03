import React, { FC, ReactNode } from 'react';
import styles from './course-card-desktop.module.css';

import { TCourse } from '../../services/data/data-types';

interface ICourse {
  course: TCourse
}

const CourseCardDesktop: FC<ICourse> = ({ course }) => {

  return (
    <div className={styles.course}>
      <img
        src={require(`../../images/desktop/${course.card_img}`)}
        alt="картинка курса"
        className={styles.course_img}
      />
      <div className={styles.course_desc}>
        <div className={styles.date}>
          <div className={styles.number}>
            {course.date.day} <p className={styles.month}>{course.date.month}</p>
          </div>
          <div className={styles.city}>{course.city}</div>
        </div>
        <div className={styles.name}>{course.name}</div>
      </div>
    </div>
  );
};

export default CourseCardDesktop;