import React, { FC, ReactNode } from 'react';
import styles from './award-card-desktop.module.css';
import { TAward } from '../../services/data/data-types';

interface IAward {
  award: TAward
}

const AwardCardDesktop: FC<IAward> = ({ award }) => {

  return (
    <div className={styles.award}>
      <img src={require(`../../images/desktop/${award.img}`)} 
        alt="иконка команды" 
        className={styles.award_img} 
      />
      <p className={styles.award_desc}>{award.desc}</p>
    </div>
  );
};

export default AwardCardDesktop;