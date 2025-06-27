"use client";

import React from "react";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./Sidebar.module.css";
import ActionButton from "./ActionButton";

const Sidebar = () => {
  const params = useParams();
  const id = params?.id;
  const pathname = usePathname();
  const router = useRouter();

  const sidewalkPath = `/jobsite/${id}/sidewalk`;
  const scaffoldPath = `/jobsite/${id}/scaffold`;

  const handleBackClick = () => {
    router.push(`/jobsite/${id}`);
  };

  return (
    <aside className={styles.sidebarContainer}>
      <div className={styles.sidebarTitle}>{"262 3rd Avenue, New York"}</div>
      <nav className={styles.navList}>
        <ul className={styles.itemsList}>
          <li
            className={`${styles.navItem} ${
              pathname === sidewalkPath ? styles.activeNavItem : ""
            }`}
          >
            <Link href={sidewalkPath} className={styles.navLink}>
              <p>Sidewalk Shed</p>
              {pathname === sidewalkPath && (
                <span className={styles.checkIcon}>
                  <img src="/check.svg" alt="active" />
                </span>
              )}
            </Link>
          </li>
          <li
            className={`${styles.navItem} ${
              pathname === scaffoldPath ? styles.activeNavItem : ""
            }`}
          >
            <Link href={scaffoldPath} className={styles.navLink}>
              <p>Scaffold</p>
              {pathname === scaffoldPath && (
                <span className={styles.checkIcon}>
                  <img src="/check.svg" alt="active" />
                </span>
              )}
            </Link>
          </li>
        </ul>
        <div className={styles.buttonContainer}>
          <ActionButton
            type="back"
            onClick={handleBackClick}
          />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
