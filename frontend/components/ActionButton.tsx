import React from "react";

import styles from "./ActionButton.module.css";

interface IProps {
  title?: string;
  type: "create" | "cancel" | "save" | "back";
  isSubmiting?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ActionButton: React.FC<IProps> = ({
  title,
  type,
  isSubmiting = false,
  onClick,
}) => {
  const defaultTitles = {
    create: "Create",
    cancel: "Cancel Changes",
    save: "Save Changes",
    back: "Go Back",
  };

  const buttonTitle = title || defaultTitles[type];

  const renderIcon = () => {
    switch (type) {
      case "create":
        return <img src="/plus.svg" alt="plus sign" />;
      case "cancel":
        return <img src="/x.svg" alt="x sign" />;
      case "save":
        return <img src="/check.svg" alt="check sign" />;
      case "back":
        return <img src="/arrow-left.svg" alt="arrow left sign" />;
      default:
        return null;
    }
  };

  return (
    <button
      onClick={onClick}
      className={`${styles.actionButton} ${styles[type]}`}
      disabled={isSubmiting}
    >
      <p>{buttonTitle}</p>
      <span className={styles.icon}>{renderIcon()}</span>
    </button>
  );
};

export default ActionButton;
