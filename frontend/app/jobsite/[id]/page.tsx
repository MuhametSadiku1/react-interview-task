"use client"

import React, { useState } from "react";
import InventoryDashboard from "../../../components/InventoryDashboard";
import EmptyBox from "@/components/EmptyBox";
import styles from "../../../components/InventoryDashboard.module.css"
import SearchBar from "@/components/SearchBar";

const JobsitePage = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <InventoryDashboard>
      <div className={styles.headerRow}>
        <span className={styles.headerTitle}>Data Grid</span>
        <SearchBar value={search} onChange={setSearch} />
      </div>
      <EmptyBox />
    </InventoryDashboard>
  );
};

export default JobsitePage;
