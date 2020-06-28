import React from 'react';
import styles from './DefaultLoader.module.css';

const DefaultLoader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.ldsDualRing}></div>
    </div>
  );
};

export default DefaultLoader;
