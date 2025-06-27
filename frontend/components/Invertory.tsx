import React, { useEffect, useState } from "react";
import StatusBadge from "./StatusBadge";
import styles from "./Invertory.module.css";

type Status = "Completed" | "On Hold" | "On Road" | "In Progress";

interface Jobsite {
  id: string;
  jobsite: string;
  category: string[];
  status: Status;
}

const Invertory = () => {
  const [jobsites, setJobsites] = useState<Jobsite[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobsites = async () => {
      try {
        const res = await fetch("http://localhost:5500/jobsites");
        if (!res.ok) throw new Error("Failed to fetch jobsites");
        const data = await res.json();
        // Assuming the API returns an array of jobsites with 'name' and 'status' fields
        setJobsites(
          data.map((jobsite: any) => ({
            id: jobsite.id,
            jobsite: jobsite.name || jobsite.jobsite || "Unnamed Jobsite",
            category: jobsite.category || [],
            status: jobsite.status as Status || "On Road",
          }))
        );
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchJobsites();
  }, []);

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
              <a href={`http://localhost:3000/jobsite/${item.id}`}>{item.jobsite}</a>
              <StatusBadge status={item.status as Status} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Invertory;
