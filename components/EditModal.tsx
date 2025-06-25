import React from "react";
import Modal from "./Modal";
import Select from "react-select";

import styles from "./Modal.module.css";
import ActionButton from "./ActionButton";

type EditModalProps = {
  handleCloseModal: () => void;
  rowData: Object;
};

const EditModal = ({ handleCloseModal, rowData }: EditModalProps) => {
  return (
    <Modal onClose={handleCloseModal} height="519px">
      <form className={styles.form}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="item">Item</label>
            <div className={`${styles.customSelect}`}>
              <Select
                id="item"
                //   options={options}
                placeholder="Search & Select Item"
                classNamePrefix="react-select"
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="quantity">Quantity</label>
            <div className={styles.fieldContainer}>
              <input type="number" id="quantity" placeholder="Set Quantity" />
            </div>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
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
            placeholder="Type a note..."
            rows={4}
            className={styles.fieldContainer}
            style={{ resize: "none" }}
          />
        </div>
      </form>
      <div className={styles.actionsModal}>
        <ActionButton type="save" />
      </div>
    </Modal>
  );
};

export default EditModal;
