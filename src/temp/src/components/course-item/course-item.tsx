import { Link } from "react-router-dom";
import styles from "./course-item.module.css";
import image from "../../images/photo.png"
import { Calendar, Clock, Place } from "../ui/icons";

const CourseItem = () => {
  return (
    <Link to="/courses/1" className={styles.course}>
      <div className={styles.img}>
        <img src={image} alt="картинка курса"/>
      </div>
      <div className={styles.description}>
        <h1 className={styles.title}>Магия женской силы</h1>
        <div className={styles.info}>
            <div className={styles.point}>
              <Calendar />
              <div className={styles.ml8} />
              <p className={styles.text}>30.11.2022</p>
            </div>
            <div className={styles.point}>
              <Place />
              <div className={styles.ml8} />
              <p className={styles.text}>Онлайн</p>
            </div>
            <div className={styles.point}>
              <Clock />
              <div className={styles.ml8} />
              <p className={styles.text}>32 часа</p>
            </div>
        </div>
        <div className={styles.subtitle}>Цель курса:</div>
        <p className={styles.about}>
          Если будет длинное описание, которое не помещается в этот блок, то делаем многоточие....
        </p>
      </div>
    </Link>
  );
};

export default CourseItem;