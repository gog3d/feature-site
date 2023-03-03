import React, { FC, ReactNode } from "react";
import styles from "./category-desktop.module.css";
import { Button, Dropdown } from "../../components/ui";
import { TServicesCategory } from '../../services/data/data-types';

interface ICategory {
  category: TServicesCategory
}

const CategoryDesktop: FC<ICategory> = ({ category }) => {
  return (
    <div className={styles.category_item}>
      <Dropdown title={category.title} titleStyle={styles.title}>
        <div className={styles.services_content}>
          <p className={styles.services_text}>
            <span className={styles.services_bold}>Кому подходит:</span>{" "}
                {category.who_suits}
          </p>
          <ul className={styles.services_list}>
          {
            category.services_list.map((item) => {
              return (
                <li className={styles.services_item} key={item.id}>
                  {item.text}
                </li>
              )
            })
          }
          </ul>

          {
            category.price.price_list.map((item) =>{
              return(
               <div className={styles.price} key={item.id}>
                 <p className={styles.services_price}>{item.price}</p>
                 <div className={styles.services_price_desc}>
                  {
                    item.desc.length?(
                    <>
                      <p>{item.desc[0].text}</p>
                      <p>{item.desc[1].text}</p>
                    </>
                    ) : null
                  }
                  </div>
               </div>
              )
            })
          }
          <div className={styles.button}>
            <Button color={"white"}>Оставить заявку</Button>
          </div>
           <p className={styles.services_price_desc_bottom}>{category.price.price_desc}</p>
        </div>
      </Dropdown>
    </div>
  );
};

export default CategoryDesktop;
