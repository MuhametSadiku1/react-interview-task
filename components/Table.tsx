"use client";

import React, { useState } from "react";
import styles from "./Table.module.css";
import EditModal from "./EditModal";

type TableRow = {
  nr: number;
  item: string;
  quantity: number;
  description: string;
  notes: string;
};

const data: TableRow[] = [
  {
    nr: 1,
    item: "G42295",
    quantity: 10,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    nr: 2,
    item: "M721",
    quantity: 83,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    nr: 3,
    item: "M94796",
    quantity: 31,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    nr: 4,
    item: "S25907",
    quantity: 47,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    nr: 5,
    item: "A68446",
    quantity: 52,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    nr: 6,
    item: "F3786",
    quantity: 10,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    nr: 7,
    item: "R69895",
    quantity: 30,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    nr: 8,
    item: "A29259",
    quantity: 32,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    nr: 9,
    item: "A41878",
    quantity: 16,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    nr: 10,
    item: "A37244",
    quantity: 13,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    nr: 11,
    item: "M89319",
    quantity: 10,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Table: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowData, setRowData] = useState<TableRow | null>(null);

  const handleEditClick = (row) => {
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
            <tr key={row.nr}>
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
