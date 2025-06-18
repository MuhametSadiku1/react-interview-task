import React from "react";
import StatusBadge from "./StatusBadge";
import styles from "./Invertory.module.css";

type Status = "Completed" | "On Hold" | "On Road" | "In Progress";

const Invertory = () => {
  const dummyData = [
    { jobsite: "1658 E 23rd St, Brooklyn, NY 11229, USA", status: "Completed" },
    { jobsite: "1705 E 22nd St, Brooklyn, NY 11229, USA", status: "On Hold" },
    { jobsite: "47 Lake St, Brooklyn, NY 11223, USA", status: "Completed" },
    { jobsite: "256 Bay 19th St, Brooklyn, NY 11214, USA", status: "On Road" },
    { jobsite: "6908 13th Ave, Brooklyn, NY 11228, USA", status: "On Road" },
    { jobsite: "1329 56th St, Brooklyn, NY 11219, USA", status: "On Road" },
    { jobsite: "588 Lenox Rd, Brooklyn, NY 11203, USA", status: "On Road" },
    { jobsite: "200 Newport St, Brooklyn, NY 11212, USA", status: "On Road" },
    { jobsite: "158-39 99th St, Queens, NY 11414, USA", status: "On Road" },
    {
      jobsite: "86-04 Shore Pkwy, Jamaica, NY 11414, USA",
      status: "In Progress",
    },
    { jobsite: "95-01 Linden Blvd, Jamaica, NY 11417, USA", status: "On Hold" },
    { jobsite: "1705 E 22nd St, Brooklyn, NY 11229, USA", status: "On Hold" },
    { jobsite: "47 Lake St, Brooklyn, NY 11223, USA", status: "Completed" },
    { jobsite: "256 Bay 19th St, Brooklyn, NY 11214, USA", status: "On Road" },
    { jobsite: "6908 13th Ave, Brooklyn, NY 11228, USA", status: "On Road" },
    { jobsite: "1329 56th St, Brooklyn, NY 11219, USA", status: "On Road" },
    { jobsite: "588 Lenox Rd, Brooklyn, NY 11203, USA", status: "On Road" },
    { jobsite: "200 Newport St, Brooklyn, NY 11212, USA", status: "On Road" },
    { jobsite: "158-39 99th St, Queens, NY 11414, USA", status: "On Road" },
    {
      jobsite: "86-04 Shore Pkwy, Jamaica, NY 11414, USA",
      status: "In Progress",
    },
    { jobsite: "95-01 Linden Blvd, Jamaica, NY 11417, USA", status: "On Road" },
    {
      jobsite: "86-04 Shore Pkwy, Jamaica, NY 11414, USA",
      status: "In Progress",
    },
  ];

  return (
    <div className={styles.invertory}>
      <div className={styles.invertoryHeader}>
        <h3>Jobsite Name</h3>
        <p>Status</p>
      </div>
      <ul className={styles.invertoryListItems}>
        {dummyData.map((item, index) => (
          <li className={styles.invertoryItem} key={index}>
            <div className={styles.invertoryItemContent}>
              <h4>{item.jobsite}</h4>
              <StatusBadge status={item.status as Status} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Invertory;
