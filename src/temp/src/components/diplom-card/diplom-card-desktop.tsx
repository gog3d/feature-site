import React, { FC, ReactNode } from 'react';
import styles from './diplom-card-desktop.module.css';
import { TDiplom } from '../../services/data/data-types';

interface IDiplom {
  diplom: TDiplom
}

const DiplomCardDesktop: FC<IDiplom> = ({ diplom }) => {

  return (
    <
      img src={require(`../../images/desktop/${diplom.img}`)} 
      alt="диплом" 
      className={styles.diplomas_img} 
    />
  );
};

export default DiplomCardDesktop;