import React from "react";
import styles from "./InventoryDashboard.module.css";
import SearchBar from "./SearchBar";

interface InventoryDashboardProps {
  children: React.ReactNode;
}

const InventoryDashboard: React.FC<InventoryDashboardProps> = ({
  children,
}) => {
  return (
    <div className={styles.dashboardContainer}>
      {children}
    </div>
  );
};

export default InventoryDashboard;
