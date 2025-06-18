import React from "react";

import styles from "./StatusBadge.module.css";

const statusColors = {
  Completed: "green",
  OnHold: "orange",
  InProgress: "blue",
};

type Status = "On Road" | "Completed" | "On Hold" | "In Progress";

interface StatusBadgeProps {
  status: Status;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  switch (status) {
    case "On Road":
      return (
        <div className={`${styles.statusBadge} ${styles.onRoad}`}>On Road</div>
      );
    case "Completed":
      return (
        <div className={`${styles.statusBadge} ${styles.completed}`}>
          Completed
        </div>
      );
    case "On Hold":
      return (
        <div className={`${styles.statusBadge} ${styles.onHold}`}>On Hold</div>
      );
    case "In Progress":
      return (
        <div className={`${styles.statusBadge} ${styles.inProgress}`}>
          In Progress
        </div>
      );
    default:
      return null;
  }
};

export default StatusBadge;
