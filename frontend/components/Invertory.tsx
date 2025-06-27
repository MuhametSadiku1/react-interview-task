import React, { useState } from "react";
import StatusBadge from "./StatusBadge";
import styles from "./Invertory.module.css";
import { Jobsite } from "@/types/types";

interface InvertoryProps {
  jobsites: Jobsite[];
}

const Invertory: React.FC<InvertoryProps> = ({jobsites}) => {
  console.log("jobsites", jobsites)

  return (
    <div className={styles.invertory}>
      <div className={styles.invertoryHeader}>
        <h3>Jobsite Name</h3>
        <p>Status</p>
      </div>
      <ul className={styles.invertoryListItems}>
        {jobsites.map((item, index) => (
          <li className={styles.invertoryItem} key={index}>
            <div className={styles.invertoryItemContent}>
              <a href={`http://localhost:3000/jobsite/${item.id}`}>{item.name}</a>
              <StatusBadge status={item.status} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Invertory;
