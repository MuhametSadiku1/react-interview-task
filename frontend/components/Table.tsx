"use client";

import React, { useState } from "react";
import styles from "./Table.module.css";
import EditModal from "./EditModal";
import { TableRow } from "@/types/types";

interface TableProps {
  data: TableRow[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowData, setRowData] = useState<TableRow | null>(null);

  const handleEditClick = (row: TableRow) => {
    console.log("Editing row:", row);
    setRowData(row);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nr.</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td onDoubleClick={() => handleEditClick(row)}>{row.nr}</td>
              <td onDoubleClick={() => handleEditClick(row)}>{row.item}</td>
              <td
                onDoubleClick={() => handleEditClick(row)}
                className={styles.quantityRow}
              >
                {row.quantity}
              </td>
              <td onDoubleClick={() => handleEditClick(row)}>
                {row.description}
              </td>
              <td onDoubleClick={() => handleEditClick(row)}>{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && rowData && (
        <EditModal
          handleCloseModal={handleCloseModal}
          rowData={rowData}
        ></EditModal>
      )}
    </>
  );
};

export default Table;
