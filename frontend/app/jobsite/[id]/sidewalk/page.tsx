"use client";

import InventoryDashboard from "@/components/InventoryDashboard";
import Table from "@/components/Table";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { TableRow } from "@/types/types";

const Page = () => {
  const params = useParams();
  const id = params?.id;
  const [items, setItems] = useState<TableRow[]>([]);
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
    <InventoryDashboard headerTitle={"Sidewalk"}>
      {loading ? <div>Loading...</div> : <Table data={items} />}
    </InventoryDashboard>
  );
};

export default Page;
