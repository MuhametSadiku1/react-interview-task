"use client";

import React, { useState } from "react";
import styles from "./Main.module.css";
import Invertory from "./Invertory";
import SearchBar from "./SearchBar";
import ActionButton from "./ActionButton";
import Modal from "./Modal";
import CreateModal from "./CreateModal";

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <SearchBar />
          <ActionButton type={"create"} onClick={handleCreateClick} />
        </div>
      </div>
      <Invertory />
      {isModalOpen && <CreateModal handleCloseModal={handleCloseModal} />}
    </main>
  );
};

export default Main;
