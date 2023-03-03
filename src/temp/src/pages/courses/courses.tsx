import styles from "./courses.module.css";
import Arrow from "../../components/ui/icons/arrow";
import CourseItem from "../../components/course-item/course-item";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../services/context";

const Courses = () => {
  const { context, setContext } = useContext(AppContext);
  const [title, setTitle] = useState("Все курсы");

  useEffect(() => {
    switch (context.course) {
      case "all":
        setTitle("Все курсы");
        break;
      case "business":
        setTitle("Бизнес");
        break;
      case "esoteric":
        setTitle("Эзотерика");
        break;
      default: setTitle("Все курсы");
    }
  }, [context.course])


  const modalOpen = () => {
    setContext({...context, modal: true});
  };

  return (
    <div className={styles.courses}>
      <div className={styles.title_row}>
        <h1 className={styles.title}>{title}</h1>
        <Arrow onClick={modalOpen}/>
      </div>
      <CourseItem />
      <CourseItem />
      <CourseItem />
      <CourseItem />
    </div>
  );
};

export default Courses;
