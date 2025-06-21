import InventoryDashboard from "@/components/InventoryDashboard";
import Table from "@/components/Table";
import React from "react";

const page = () => {
  return (
    <InventoryDashboard headerTitle={"Sidewalk"}>
      <Table />
    </InventoryDashboard>
  );
};

export default page;
