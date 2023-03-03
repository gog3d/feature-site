import styles from "./courses-desktop.module.css";
import { ArrowDesktop }from "../../components/ui/icons";
import CourseItemDesktop from "../../components/course-item/course-item-desktop";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../services/context";

import data from '../../services/data/data.json';

const CoursesDesktop = () => {
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
        <ArrowDesktop onClick={modalOpen}/>
      </div>
      <div className={styles.courses_container}>
      {
        data.courses ? (data.courses.map((course)=>
          <CourseItemDesktop course={course} key={course.id}/>
        )) : (null)
      }
      </div>
    </div>
  );
};

export default CoursesDesktop;
