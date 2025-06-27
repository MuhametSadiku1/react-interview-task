import React from "react";

import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <span>
        <img src="/search.svg" alt="Search" />
      </span>
      <input type="text" placeholder="Search a driver" />
    </div>
  );
};

export default SearchBar;
