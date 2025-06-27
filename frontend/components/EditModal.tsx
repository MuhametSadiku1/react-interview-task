import React, { useState } from "react";
import Modal from "./Modal";
import styles from "./Modal.module.css";
import ActionButton from "./ActionButton";
import { TableRow } from "@/types/types";

type EditModalProps = {
  handleCloseModal: () => void;
  rowData: TableRow;
};

const EditModal = ({ handleCloseModal, rowData }: EditModalProps) => {
  const [item, setItem] = useState(rowData.item || "");
  const [quantity, setQuantity] = useState(rowData.quantity || 0);
  const [description, setDescription] = useState(rowData.description || "");
  const [notes, setNotes] = useState(rowData.notes || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`http://localhost:5500/items/${rowData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          item,
          jobsiteId: rowData.jobsiteId,
          quantity,
          description,
          notes,
        }),
      });
      if (!res.ok) throw new Error("Failed to update item");
      handleCloseModal();
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal onClose={handleCloseModal} height="519px">
      <form className={styles.form}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="item">Item</label>
            <div className={`${styles.fieldContainer}`}>
              <input
                type="text"
                id="item"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                placeholder="Item code"
                className={styles.fieldContainer}
                required
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="quantity">Quantity</label>
            <div className={styles.fieldContainer}>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                placeholder="Set Quantity"
                required
              />
            </div>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Type the description..."
            rows={4}
            className={styles.fieldContainer}
            style={{ resize: "none" }}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Type a note..."
            rows={4}
            className={styles.fieldContainer}
            style={{ resize: "none" }}
          />
        </div>
      </form>
      <div className={styles.actionsModal}>
        <ActionButton type="save" onClick={handleSave} />
      </div>
    </Modal>
  );
};

export default EditModal;
