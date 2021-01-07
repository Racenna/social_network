import React from 'react';
import styles from './Pagination.module.css';

type PropsType = {
  currentPage: number;
  totalItemsCount: number;
  pageSize: number;
  onPageChanged: (page: number) => void;
};

const Pagination: React.FC<PropsType> = ({
  currentPage,
  totalItemsCount,
  pageSize,
  onPageChanged,
}) => {
  const prevuesPage = (): void => {
    if (currentPage !== 1) onPageChanged(currentPage - 1);
    return;
  };

  const nextPage = (): void => {
    if (currentPage !== pagesCount) onPageChanged(currentPage + 1);
    return;
  };

  const pagesCount = Math.ceil(totalItemsCount / pageSize);

  const pages: number[] = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const filteredPage = (page: number): boolean => {
    if (
      page === 1 ||
      page === totalItemsCount ||
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
