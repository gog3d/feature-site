import React, { useEffect } from "react";
import styles from "./course.module.css";
import image from "../../images/photo.png";
import { Calendar, Share, Place, Clock } from "../../components/ui/icons";
import { Button } from "../../components/ui";
import Feedback from "../../components/feedback/feedback";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Course = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={image} alt="preview" width="100%" height="100%" />
      </div>
      <div className={styles.main}>
        <div className={styles.info}>
          <div>
            <div className={styles.point}>
              <Calendar />
              <div className={styles.ml8} />
              <p className={styles.text}>Ожидается</p>
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
          <Share />
        </div>
        <h1 className={styles.title}>Магия женской силы</h1>
        <h2 className={styles.subtitle}>Цель курса:</h2>
        <p className={styles.text}>
          Cтать настоящей Вестой, женщиной-мечтой для своего супруга.
        </p>
        <h2 className={styles.subtitle}>Задача курса:</h2>
        <p className={styles.text}>
          Научиться вдохновлять и направлять своего супруга, научиться находить
          подход, использовать женскую силу и привлекательность для реализации
          своих желаний и лада в доме.
        </p>
        <div className={styles.hr} />
        <h1 className={styles.title}>Описание</h1>
        <p className={styles.text}>
          Сила женщины – в её слабости, в её нежности и принятии. На тренинге
          раскрывается женская суть женщины. Как найти достойного? Как привлечь
          и удержать?
          <br />
          <br />
          На тренинге раскрывается умение направлять мужчину на исполнение ваших
          желаний.
          <br />
          <br />
          Также даются лёгкие техники бытовой женской магии, необходимые каждой
          женщине.
        </p>

        <details>
          <summary className={styles.summary}>Смотреть полное описание</summary>
          <h2 className={styles.subtitle}>Курс состоит из четырёх модулей:</h2>
          <h2 className={styles.subtitle}>I Модуль</h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              Лекция:
              <br />
              Настоящая женщина – кто она?
              <br />
              Чем леди отличается от быдла и от стервы?
              <br />
              Чем Веста отличается от леди и в чём их схожесть?
              <br />
            </li>
            <li className={styles.item}>
              Разбор личностных ситуаций, которые будем менять в процессе
              тренинга;
            </li>
            <li className={styles.item}>
              Обзор ошибок, правильных действий и путей развития событий в
              каждой конкретной ситуации.
            </li>
          </ul>
          <h2 className={styles.subtitle}>II Модуль</h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              Выявление блоков и ограничений, программ детства и общества;
            </li>
            <li className={styles.item}>
              Медитация по снятию блоков и ограничений;
            </li>
            <li className={styles.item}>
              Раскрытие сознания: снятие морока; снятие блоков и программ
              прошлого и настоящего; раскрытие принятия.
            </li>
            <li className={styles.item}>
              Магический расклад на предназначение и кармические задачи;
            </li>
            <li className={styles.item}>
              Расстановочная техника по выявлению пути творческой реализации;
            </li>
            <li className={styles.item}>
              Лекция «Типы мужчин по физиогномике и характеру»;
            </li>
            <li className={styles.item}>
              Расстановочная техника по выявлению своего типа мужчин.
            </li>
          </ul>
          <h2 className={styles.subtitle}>III Модуль</h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              Лекция «Как найти своего мужчину, привлечь и удержать»;
            </li>
            <li className={styles.item}>
              Практическая техника: как направлять и вдохновлять своего мужчину;
            </li>
            <li className={styles.item}>
              Практическая техника раскрытия женской силы;
            </li>
            <li className={styles.item}>
              Медитация «Сила женщины»: раскрытие женской внутренней силы;
              раскрытие силы духовной привлекательности; открытие путей на лад с
              супругом.
            </li>
            <li className={styles.item}>
              Практика получения желаемого с помощью женской силы.
            </li>
          </ul>
          <h2 className={styles.subtitle}>IV Модуль</h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              Женская бытовая магия: обряды по очищению дома; ладка
              пространства; обряды, заговоры, зелья на лад в семье.
            </li>
          </ul>
        </details>
        <Button color={"violet"}>Участвовать</Button>
        <div className={styles.mt56} />
        <h1 className={styles.title}>Отзывы</h1>
      </div>
      <div className={styles.feedback}>
        <Swiper spaceBetween={16} width={300} style={{ padding: "0 7%" }}>
          <SwiperSlide>
            <Feedback name={"Инна"}>
              <div>
                Здравия всем.<br/>
                Лада в Перми. Друзья, просто находится с Ладой
                рядом, быть в&nbsp;её&nbsp;поле, уже счастье. Было столько тревог, сомнений,
                беспокойства... Все уходит...
              </div>
            </Feedback>
          </SwiperSlide>
          <SwiperSlide>
            <Feedback name={"Людмила"}>
              <div>
                Хотела поблагодарить Ладу за<br/>семинар Руны 1 ступень. Для<br/> меня это
                совершенно новое направление, но очень<br/> интересное. Очень
                интересная подача Лады. За короткое время...
              </div>
            </Feedback>
          </SwiperSlide>
          <SwiperSlide>
            <Feedback name={"Инна"}>
              <div>
                Здравия всем.<br/>
                Лада в Перми. Друзья, просто находится с Ладой
                рядом, быть в&nbsp;её&nbsp;поле, уже счастье. Было столько тревог, сомнений,
                беспокойства... Все уходит...
              </div>
            </Feedback>
          </SwiperSlide>
          <SwiperSlide>
            <Feedback name={"Людмила"}>
              <div>
                Хотела поблагодарить Ладу за<br/>семинар Руны 1 ступень. Для<br/> меня это
                совершенно новое направление, но очень<br/> интересное. Очень
                интересная подача Лады. За короткое время...
              </div>
            </Feedback>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.main}>
        <Button color={"violet"}>Все отзывы</Button>
        <div className={styles.mb116}></div>
      </div>
    </div>
  );
};

export default Course;
