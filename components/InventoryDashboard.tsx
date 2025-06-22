import React from "react";
import styles from "./InventoryDashboard.module.css";
import SearchBar from "./SearchBar";

interface InventoryDashboardProps {
  headerTitle: string;
  children: React.ReactNode;
}

const InventoryDashboard: React.FC<InventoryDashboardProps> = ({
  headerTitle,
  children,
}) => {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.headerRow}>
        <span className={styles.headerTitle}>{headerTitle}</span>
        <SearchBar />
      </div>
      {children}
    </div>
  );
};

export default InventoryDashboard;
