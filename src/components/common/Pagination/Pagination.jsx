import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Pagination.module.css';

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
      <NavLink
        to={`/users?page=${page}`}
        key={page}
        onClick={() => {
          onPageChanged(page);
        }}
      >
        <div className={classes}>{page}</div>
      </NavLink>
    );
  });

  return (
    <div className={styles.pagination}>
      <NavLink to={`/users?page=${currentPage - 1}`} onClick={prevuesPage}>
        <div className={styles.unselectable}>&larr;</div>
      </NavLink>
      {renderPage}
      <NavLink to={`/users?page=${currentPage + 1}`} onClick={nextPage}>
        <div className={styles.unselectable}>&rarr;</div>
      </NavLink>
    </div>
  );
};

export default Pagination;
