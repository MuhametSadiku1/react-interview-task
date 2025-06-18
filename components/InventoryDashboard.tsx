import React from "react";
import styles from "./InvertoryDashboard.module.css";
import Image from "next/image";

const InventoryDashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.headerRow}>
        <span className={styles.dataGridTitle}>Data Grid</span>
        <input className={styles.searchInput} placeholder="Search a driver" />
      </div>
      <div className={styles.emptyState}>
        <Image src="/emptyBox.png" alt="No Service" width={192} height={151} />
        <div className={styles.emptyStateText}>
          <h4>No Service Selected</h4>
          <p>Please select a service on your left to proceed.</p>
        </div>
      </div>
    </div>
  );
};

export default InventoryDashboard;
