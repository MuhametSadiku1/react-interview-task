import React from "react";
import styles from "./EmptyBox.module.css";
import Image from "next/image";

const EmptyBox = () => {
  return (
    <div className={styles.emptyState}>
      <Image src="/emptyBox.png" alt="No Service" width={192} height={151} />
      <div className={styles.emptyStateText}>
        <h4>No Service Selected</h4>
        <p>Please select a service on your left to proceed.</p>
      </div>
    </div>
  );
};

export default EmptyBox;
