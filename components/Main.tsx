import React from "react";
import styles from "./Main.module.css";
import Invertory from "./Invertory";

const Main = () => {
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
          <div className={styles.searchBar}>
            <span>
              <img src="/search.svg" alt="Search" />
            </span>
            <input type="text" placeholder="Search a driver" />
          </div>
          <button className={styles.createButton}>
            <p>Create</p>
            <span className={styles.plus}>+</span>
          </button>
        </div>
      </div>
      <Invertory />
    </main>
  );
};

export default Main;
