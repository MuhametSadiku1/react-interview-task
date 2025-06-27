import React from "react";
import styles from "./Modal.module.css";

interface IProps {
  onClose: () => void;
  height: string;
  children?: React.ReactNode;
}

const Modal: React.FC<IProps> = ({ onClose, height, children }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal} style={{ height: height }}>
        <div className={styles.header}>
          <h3>Title</h3>
          <button onClick={onClose} className={styles.closeButton}>
            <img src="/x-dark.svg" alt="close" />
          </button>
        </div>
        <div className={styles.content}>
          <div className={styles.informative}>
            <span>
              <img src="/information.png" alt="Informative" />
            </span>
            <p>
              Informative piece of text that can be used regarding this modal.
            </p>
          </div>
          <div className={styles.children}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
