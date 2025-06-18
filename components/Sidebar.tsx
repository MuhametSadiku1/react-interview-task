import React from "react";
import Link from "next/link";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebarContainer}>
      <div className={styles.sidebarTitle}>{"262 3rd Avenue, New York"}</div>
      <nav className={styles.navList}>
        <ul className={styles.itemsList}>
          <li className={styles.navItem}>
            <Link href="/sidewalk" className={styles.navLink}>
              Sidewalk Shed
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/scaffold" className={styles.navLink}>
              Scaffold
            </Link>
          </li>
        </ul>
        <div className={styles.buttonContainer}>
          <button>Go Back</button>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
