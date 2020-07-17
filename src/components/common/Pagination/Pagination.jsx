import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
}) => {
  const prevuesPage = () => {
    if (currentPage !== 1) onPageChanged(currentPage - 1);
    return;
  };

  const nextPage = () => {
    if (currentPage !== pagesCount) onPageChanged(currentPage + 1);
    return;
  };

  const pagesCount = Math.ceil(totalUsersCount / pageSize);

  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const filteredPage = (page) => {
    if (
      page === 1 ||
      page === totalUsersCount ||
      (page >= currentPage - 3 && page <= currentPage + 3) ||
      page === pagesCount
    ) {
      return true;
    }
    return false;
  };

  const renderPage = pages.filter(filteredPage).map((page) => {
    const classes = `${styles.unselectable} ${
      currentPage === page && styles.selected_page
    }`;

    return (
      <div
        key={page}
        className={classes}
        onClick={() => {
          onPageChanged(page);
        }}
      >
        {page}
      </div>
    );
  });

  return (
    <div className={styles.pagination}>
      <div className={styles.unselectable} onClick={prevuesPage}>
        &larr;
      </div>
      {renderPage}
      <div className={styles.unselectable} onClick={nextPage}>
        &rarr;
      </div>
    </div>
  );
};

export default Pagination;
