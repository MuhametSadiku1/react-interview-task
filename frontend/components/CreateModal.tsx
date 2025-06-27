import React, { useState } from "react";
import Modal from "./Modal";

import styles from "./Modal.module.css";
import ActionButton from "./ActionButton";
import Select, { MultiValue, ActionMeta, SingleValue } from "react-select";

type CreateModalProps = {
  handleCloseModal: () => void;
};

const optionsCategory = [
  { value: "Sidewalk Shed", label: "Sidewalk Shed" },
  { value: "Scaffold", label: "Scaffold" },
  { value: "Shoring", label: "Shoring" },
];

const optionsStatus = [
  { value: "Completed", label: "Completed" },
  { value: "In Progress", label: "In Progress" },
  { value: "On Hold", label: "On Hold" },
];

const CreateModal = ({ handleCloseModal }: CreateModalProps) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState<{ value: string; label: string }[]>([]);
  const [status, setStatus] = useState<{ value: string; label: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("http://localhost:5500/jobsites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          category: category.map((c) => c.value),
          status: status?.value || "On Road",
        }),
      });
      if (!res.ok) throw new Error("Failed to add jobsite");
      handleCloseModal();
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (
    newValue: MultiValue<{ value: string; label: string }>,
    _actionMeta: ActionMeta<{ value: string; label: string }>
  ) => {
    setCategory(newValue as { value: string; label: string }[]);
  };

  const handleStatusChange = (
    newValue: SingleValue<{ value: string; label: string }>,
    _actionMeta: ActionMeta<{ value: string; label: string }>
  ) => {
    setStatus(newValue);
  };

  return (
    <Modal onClose={handleCloseModal} height="388px">
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <div className={styles.fieldContainer}>
            <input
              type="text"
              id="name"
              placeholder="Type the jobsite's name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="category">Category Included</label>
            <Select
              classNamePrefix="customSelect"
              className={styles.customSelect}
              isMulti
              inputId="category"
              options={optionsCategory}
              placeholder="Select"
              value={category}
              onChange={handleCategoryChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="status">Status</label>
            <Select
              classNamePrefix="customSelect"
              className={styles.customSelect}
              inputId="status"
              options={optionsStatus}
              placeholder="Select one"
              value={status}
              onChange={handleStatusChange}
            />
          </div>
        </div>
      </form>
      <div className={styles.actionsModal}>
        <ActionButton type="cancel" onClick={handleCloseModal} />
        <ActionButton type="save" onClick={handleSubmit} />
      </div>
    </Modal>
  );
};

export default CreateModal;
