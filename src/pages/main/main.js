import React from 'react';
import styles from "./main.module.css";
import FigureContainer from '../../components/figure-container/figure-container';
import Figure3dx from '../../components/figure-3dx/figure-3dx';

const Main = () => {
  return (
    <div className={styles.container}>
      <Figure3dx />
    </div>
  );
};

export default Main;
