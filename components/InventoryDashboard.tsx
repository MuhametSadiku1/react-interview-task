import React from "react";
import styles from "./InventoryDashboard.module.css";

const InventoryDashboard = ({ headerTitle, children }) => {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.headerRow}>
        <span className={styles.headerTitle}>{headerTitle}</span>
        <input className={styles.searchInput} placeholder="Search a driver" />
      </div>
      {children}
    </div>
  );
};

export default InventoryDashboard;
