"use client";

import InventoryDashboard from "@/components/InventoryDashboard";
import Table from "@/components/Table";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { TableRow } from "@/types/types";
import styles from "../../../../components/InventoryDashboard.module.css"
import SearchBar from "@/components/SearchBar";

const Page = () => {
  const params = useParams();
  const id = params?.id;
  const [items, setItems] = useState<TableRow[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:5500/items?jobsiteId=${id}`)
      .then((res) => res.json())
      .then((data) =>
        setItems(
          data.map((item: TableRow, idx: number) => ({
            id: item.id,
            jobsiteId: item.jobsiteId,
            nr: idx + 1,
            item: item.item,
            quantity: item.quantity,
            description: item.description,
            notes: item.notes,
          }))
        )
      )
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <InventoryDashboard>
      <div className={styles.headerRow}>
        <span className={styles.headerTitle}>Sidewalk</span>
        <SearchBar value={search} onChange={setSearch} />
      </div>
      {loading ? <div>Loading...</div> : <Table data={items.filter(item =>
        item.item.toLowerCase().includes(search.toLowerCase())
      )} />}
    </InventoryDashboard>
  );
};

export default Page;
