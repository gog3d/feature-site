import React from 'react';
import styles from "./main-desktop.module.css";

import {
  ladaPhotoDesktop,
  ladaTextDesktop,
  courseCardDesktop
} from "../../images/desktop";

import CategoryDesktop from '../../components/category/category-desktop';
import CourseCardDesktop from '../../components/course-card/course-card-desktop';
import AwardCardDesktop from '../../components/award-card/award-card-desktop';
import DiplomCardDesktop from '../../components/diplom-card/diplom-card-desktop';

import data from '../../services/data/data.json';
//import { TServicesCategory } from '../../services/data/data-types';

//console.log(data);

const MainDesktop = () => {
  return (
    <div className={styles.container}>
      <div className={styles.promo}>
        <img src={ladaPhotoDesktop} alt="фото лады" className={styles.photo} />
        <img src={ladaTextDesktop} alt="Лада Ведунья" className={styles.img_text} />
      </div>
      <p className={styles.photo_description}>
        Организационно-управленческий психолог, корпоративный бизнес-тренер, мотиватор, наставник
      </p>
      <p className={styles.sub_description}>
        А ещё сильнейшая провидица современности, бизнес-маг, рунолог, этнолог, физик
      </p>
      <div className={styles.services}>
        <h2 className={styles.title}>Услуги</h2>
        <div className={styles.services_category}>
          {
            data.services_category ? (data.services_category.map((category) =>
              <CategoryDesktop category={category} key={category.id}/>
             )) : (null)
          }
        </div>
      </div>
      <div className={styles.courses}>
        <h2 className={styles.title}>Ближайшие курсы</h2>
        <div className={styles.courses_container}>
        {
          data.courses ? (data.courses.map((course)=>
            <CourseCardDesktop course={course} key={course.id}/>
          )) : (null)
        }
        </div>
      </div>
      <div className={styles.awards}>
        <h2 className={styles.title}>Премии и заслуги</h2>
        <div className={styles.awards_container}>
        {
          data.awards ? (data.awards.map((award)=>
            <AwardCardDesktop award={award} key={award.id}/>
          )) : (null)
        }
        </div>
      </div>

      <div className={styles.diplomas}>
        <h2 className={styles.title}>Дипломы</h2>
        <div className={styles.diplomas_container}>
        {
          data.diplomas ? (data.diplomas.map((diplom)=>
            <DiplomCardDesktop diplom={diplom} key={diplom.id}/>
          )) : (null)
        }
        </div>
      </div>
    </div>
  );
};

export default MainDesktop;
