import React from 'react'
import styles from './Header.module.css'

type HeaderProps = {
  onRoad: number;
  completed: number;
  onHold: number;
};

const Header: React.FC<HeaderProps> = ({onRoad, completed, onHold}) => {
  return (
    <header className={styles.header}>
      <div className={`${styles.statusBox} ${styles.onRoad}`}>{onRoad} On Road</div>
      <div className={`${styles.statusBox} ${styles.completed}`}>{completed} Completed</div>
      <div className={`${styles.statusBox} ${styles.onHold}`}>{onHold} On Hold</div>
    </header>
  )
}

export default Header
