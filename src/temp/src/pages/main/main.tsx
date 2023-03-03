import React from "react";
import styles from "./main.module.css";
import { Button, Dropdown } from "../../components/ui";
import {
  award,
  book,
  game,
  photo,
  imgText,
  leadership,
  prize,
  ribbon,
  team,
  tv,
  screen,
  imgCourse,
  cup,
  diplom1,
  diplom2,
  diplom3,
  diplom4,
} from "../../images";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.promo}>
        <img src={photo} alt="фото лады" className={styles.photo} />
        <img src={imgText} alt="Лада Ведунья" className={styles.img_text} />
      </div>
      <p className={styles.photo_description}>
        ‌Организационно-управленческий психолог,&nbsp;корпоративный
        бизнес-тренер, мотиватор, наставник
      </p>
      <p className={styles.sub_description}>
        А‌ ещё сильнейшая провидица современности, бизнес-маг, рунолог, этнолог,
        физик
      </p>
      <div className={styles.services}>
        <h2 className={styles.title}>Услуги</h2>
        <div className={styles.services_category}>
          <Dropdown title={"Жизнь и самореализация"}>
            <div className={styles.services_content}>
              <p className={styles.services_text}>
                <span className={styles.services_bold}>Кому подходит:</span>{" "}
                всем, кто хочет прокачать свою жизнь, стать успешнее и
                счастливее.
              </p>
              <ul className={styles.services_list}>
                <li className={styles.services_item}>
                  Выявим куда стоит двигаться, где «подстелить соломки»;
                </li>
                <li className={styles.services_item}>
                  Экологично, деликатно и быстро помогу устранить все негативные
                  состояния, мешающие достижению желаемого:‌ страхи, панику,
                  блоки, ограничения, внутреннее сопротивление, самосаботаж,
                  выгорание, печаль, апатию, злость, отчаянье, обиду, усталость,
                  негативные программы во всех их проявлениях;
                </li>
                <li className={styles.services_item}>
                  Разберу родовые блоки и программы;
                </li>
                <li className={styles.services_item}>
                  Проведу квантовые расстановки, ремнезию (безгипнотический
                  регресс), память рода;
                </li>
                <li className={styles.services_item}>
                  Приведу в ресурсное состояние, настрою на результат и
                  достижение цели.
                </li>
              </ul>
              <div className={styles.price}>
                <p className={styles.services_price}>17 000 руб.</p>
                <p className={styles.services_price_desc}>
                  Разовая консультация
                  <br />
                  (длительность 1 час)
                </p>
              </div>
              <div className={styles.price}>
                <p className={styles.services_price}>150 000 руб.</p>
                <p className={styles.services_price_desc}>
                  Пакет 10 консультаций
                  <br />
                  (можно использовать в течении года)
                </p>
              </div>
              <div className={styles.price}>
                <p className={styles.services_price}>325 000 руб.</p>
                <p className={styles.services_price_desc}>
                  Пакет 25 консультаций
                  <br />
                  (можно использовать в течении года)
                </p>
              </div>
              <div className={styles.button}>
                <Button color={"white"}>Оставить заявку</Button>
              </div>
            </div>
          </Dropdown>
          <Dropdown title={"Бизнес"}>
            <div className={styles.services_content}>
              <p className={styles.services_text}>
                <span className={styles.services_bold}>Кому подходит:</span> Для
                руководителей, владельцев бизнеса, начинающих бизнесменов и тех,
                кто только хочет открыть бизнес.
              </p>
              <ul className={styles.services_list}>
                <li className={styles.services_item}>
                  ️Выявим направление, нишу, цветовые решения в логотипе,
                  целевую аудиторию, как в начале бизнеса, так при его развитии;
                </li>
                <li className={styles.services_item}>
                  Подберем идеальные даты в бизнесе: открытие бизнеса, сделки,
                  встречи, заключение договоров. Чтобы всё получилось наилучшим
                  образом;
                </li>
                <li className={styles.services_item}>
                  Расставим приоритеты, высвободим время на себя. «Я ничего не
                  успеваю» уйдет из твоего лексикона, потому, что будешь
                  успевать в разы больше;
                </li>
                <li className={styles.services_item}>
                  Выстроим вместе пошаговый план успешного развития бизнеса.
                  Поддержу в его реализации и доведу до результата.
                </li>
              </ul>
              <div className={styles.price}>
                <p className={styles.services_price}>17 000 руб.</p>
                <p className={styles.services_price_desc}>
                  Разовая консультация
                  <br />
                  (длительность 1 час)
                </p>
              </div>
              <div className={styles.price}>
                <p className={styles.services_price}>60 000 руб.</p>
                <p className={styles.services_price_desc}>
                  Месячное сопровождение
                  <br />
                  (4 консультации)
                </p>
              </div>
              <div className={styles.price}>
                <p className={styles.services_price}>150 000 руб.</p>
                <p className={styles.services_price_desc}>
                  Трёхмесячное сопровождение
                  <br />
                  (12 консультаций)
                </p>
              </div>
              <div className={styles.price}>
                <p className={styles.services_price}>260 000 руб.</p>
                <p className={styles.services_price_desc}>
                  Полугодовое сопровождение
                  <br />
                  (24 консультации)
                </p>
              </div>
              <div className={styles.price}>
                <p className={styles.services_price}>500 000 руб.</p>
                <p className={styles.services_price_desc}>
                  Годовое сопровождение
                  <br />
                  (50 консультаций)
                </p>
              </div>
              <div className={styles.button}>
                <Button color={"white"}>Оставить заявку</Button>
              </div>
            </div>
          </Dropdown>
          <Dropdown title={"Корпоративный коучинг"}>
            <div className={styles.services_content}>
              <p className={styles.services_text}>
                <span className={styles.services_bold}>Кому подходит:</span> Для
                владельцев бизнеса с численностью от 5 человек, нуждающихся в
                эффективности команд и масштабировании бизнеса.
              </p>
              <ul className={styles.services_list}>
                <li className={styles.services_item}>
                  Настрою команду на эффективность: сплочённость, чёткое
                  распределение обязанностей и технических задач, систематизацию
                  времени и быструю реализацию планов, обозначу коллективную и
                  частную мотивацию, чтобы команде было выгодно поддерживать
                  друг друга;
                </li>
                <li className={styles.services_item}>
                  ️При необходимости подберем кадры, сделаем перестановку на
                  уровнях организационной иерархии.
                </li>
              </ul>
              <div className={styles.price}>
                <p className={styles.services_price}>Цена договорная*</p>
                <p className={styles.services_price_desc}>
                  *зависит от сложности, целей,
                  <br />
                  количества человек в компании
                </p>
              </div>

              <div className={styles.button}>
                <Button color={"white"}>Оставить заявку</Button>
              </div>
            </div>
          </Dropdown>
        </div>
      </div>

      <div className={styles.courses}>
        <h2 className={styles.title}>Ближайшие курсы</h2>
        <div className={styles.course}>
          <img
            src={imgCourse}
            alt="картинка курса"
            className={styles.course_img}
          />
          <div className={styles.course_desc}>
            <div className={styles.date}>
              <div className={styles.number}>
                05 <p className={styles.month}>марта</p>
              </div>
              <div className={styles.city}>Нижний-Новгород</div>
            </div>
            <div className={styles.name}>Магия женской силы</div>
          </div>
        </div>
        <div className={styles.course}>
          <img
            src={imgCourse}
            alt="картинка курса"
            className={styles.course_img}
          />
          <div className={styles.course_desc}>
            <div className={styles.date}>
              <div className={styles.number}>
                13 <p className={styles.month}>апреля</p>
              </div>
              <div className={styles.city}>Москва</div>
            </div>
            <div className={styles.name}>Методика изменения реальности</div>
          </div>
        </div>
        <div className={styles.course}>
          <img
            src={imgCourse}
            alt="картинка курса"
            className={styles.course_img}
          />
          <div className={styles.course_desc}>
            <div className={styles.date}>
              <div className={styles.number}>
                07 <p className={styles.month}>июня</p>
              </div>
              <div className={styles.city}>Ростов-на-Дону</div>
            </div>
            <div className={styles.name}>Магия привлечения денег</div>
          </div>
        </div>
      </div>

      <h2 className={styles.title}>Премии и заслуги</h2>
      <div className={styles.awards}>
        <div className={styles.award}>
          <img src={team} alt="иконка команды" className={styles.award_img} />
          <p className={styles.award_desc}>
            ‌Член правления Общероссийской общественной организации «Деловые
            Женщины России»
          </p>
        </div>

        <div className={styles.award}>
          <img src={game} alt="иконка игры" className={styles.award_img} />
          <p className={styles.award_desc}>
            Автор бизнес-игры «Мышление на миллиард»
          </p>
        </div>
        <div className={styles.award}>
          <img src={book} alt="иконка книги" className={styles.award_img} />
          <p className={styles.award_desc}>
            Автор книг по этнологии и древней магической традиции
          </p>
        </div>
        <div className={styles.award}>
          <img
            src={leadership}
            alt="иконка лидерства"
            className={styles.award_img}
          />
          <p className={styles.award_desc}>
            ‌Региональный лидер клуба PRO-женщин
          </p>
        </div>
        <div className={styles.award}>
          <img src={screen} alt="иконка экрана" className={styles.award_img} />
          <p className={styles.award_desc}>
            TV-эксперт ‌Каналы ОРТ, ТВ3, ОТР, НТВ, РенТВ и др.
          </p>
        </div>
        <div className={styles.award}>
          <img src={tv} alt="иконка тв" className={styles.award_img} />
          <p className={styles.award_desc}>
            Сильнейший участник шоу «Сверхъестественный отбор» на ТВ3
          </p>
        </div>
        <div className={styles.award}>
          <img src={prize} alt="иконка приза" className={styles.award_img} />
          <p className={styles.award_desc}>
            Трижды лауреат премии «Успех», «Золотая птица», деловые женщины
            России 2019, 2020, 2021гг.
          </p>
        </div>
        <div className={styles.award}>
          <img src={ribbon} alt="иконка ленты" className={styles.award_img} />
          <p className={styles.award_desc}>
            Трижды лауреат телевизионной бизнес-премии за вклад в развитие
            общества и социальное служение «Маgic Aword».
          </p>
        </div>
        <div className={styles.award}>
          <img src={cup} alt="иконка кубка" className={styles.award_img} />
          <p className={styles.award_desc}>
            ‌Дважды лауреат премии «Признание года» от республики Башкортостан и
            канала MTVmix 2018, 2021гг.
          </p>
        </div>
        <div className={styles.award}>
          <img src={award} alt="иконка награды" className={styles.award_img} />
          <p className={styles.award_desc}>
            Победитель множества профессиональных соревнований в области магии,
            в том числе международных
          </p>
        </div>
      </div>

      <h2 className={styles.title}>Дипломы</h2>
      <div className={styles.diplomas}>
        <img src={diplom1} alt="диплом" className={styles.diplomas_img} />
        <img src={diplom2} alt="диплом" className={styles.diplomas_img} />
        <img src={diplom3} alt="диплом" className={styles.diplomas_img} />
        <img src={diplom4} alt="диплом" className={styles.diplomas_img} />
      </div>
    </div>
  );
};

export default Main;
