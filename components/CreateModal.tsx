import React from "react";
import Modal from "./Modal";

import styles from "./Modal.module.css";
import ActionButton from "./ActionButton";
import Select from "react-select";

type CreateModalProps = {
  handleCloseModal: () => void;
};

const optionsCategory = [
  { value: "Sidewalk Shed", label: "Sidewalk Shed" },
  { value: "Scaffold", label: "Scaffold" },
  { value: "Shoring", label: "Shoring" },
];

const optionsStatus = [
  { value: "Sidewalk Shed", label: "Sidewalk Shed" },
  { value: "Scaffold", label: "Scaffold" },
];

const CreateModal = ({ handleCloseModal }: CreateModalProps) => {
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
            />
          </div>
        </div>
      </form>
      <div className={styles.actionsModal}>
        <ActionButton type="cancel" onClick={handleCloseModal} />
        <ActionButton type="save" onClick={() => {}} />
      </div>
    </Modal>
  );
};

export default CreateModal;
