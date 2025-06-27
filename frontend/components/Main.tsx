"use client";

import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";
import Invertory from "./Invertory";
import SearchBar from "./SearchBar";
import ActionButton from "./ActionButton";
import CreateModal from "./CreateModal";
import { Jobsite } from "@/types/types";

const Main = () => {
  const [jobsites, setJobsites] = useState<Jobsite[]>([]);
  const [search, setSearch] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchJobsites = async () => {
      try {
        const res = await fetch("http://localhost:5500/jobsites");
        if (!res.ok) throw new Error("Failed to fetch jobsites");
        const data = await res.json();
        setJobsites(
          data.map((jobsite: Jobsite) => ({
            id: jobsite.id,
            name: jobsite.name,
            category: jobsite.category || [],
            status: jobsite.status,
          }))
        );
      } catch (err: any) {
        console.log(err);
      }
    };
    fetchJobsites();
  }, []);

  const handleCreateClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className={styles.main}>
      <div className={styles.mainHeader}>
        <div className={styles.title}>
          <p>Title</p>
        </div>
      </div>
      <div className={styles.controls}>
        <div className={styles.informative}>
          <span>
            <img src="/information.png" alt="Informative" />
          </span>
          <p>
            Informative piece of text that can be used regarding this modal.
          </p>
        </div>
        <div className={styles.actions}>
          <SearchBar value={search} onChange={setSearch} />
          <ActionButton type={"create"} onClick={handleCreateClick} />
        </div>
      </div>
      <Invertory jobsites={jobsites.filter(jobsite =>
        jobsite.name.toLowerCase().includes(search.toLowerCase())
      )} />
      {isModalOpen && <CreateModal handleCloseModal={handleCloseModal} />}
    </main>
  );
};

export default Main;
