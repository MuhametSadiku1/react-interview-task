"use client"

import React from "react";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import styles from "./Sidebar.module.css";
import ActionButton from "./ActionButton";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebarContainer}>
      <div className={styles.sidebarTitle}>{"262 3rd Avenue, New York"}</div>
      <nav className={styles.navList}>
        <ul className={styles.itemsList}>
          <li className={styles.navItem}>
            <Link href={`${pathname}/sidewalk`} className={styles.navLink}>
              Sidewalk Shed
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href={`${pathname}/scaffold`} className={styles.navLink}>
              Scaffold
            </Link>
          </li>
        </ul>
        <div className={styles.buttonContainer}>
          <ActionButton type="back" />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
