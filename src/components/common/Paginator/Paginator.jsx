import React, { useState } from 'react';
import styles from './Paginator.module.scss';
import cn from 'classnames';

const Paginator = ({
  totalAmountItems,
  itemsOnPage,
  currentPageItems,
  newSelectedPage,
  portionSize = 10,
}) => {
  const buttonsItemPage = Math.ceil(totalAmountItems / itemsOnPage);

  let pages = [];

  for (let i = 1; i <= buttonsItemPage; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(buttonsItemPage / portionSize);

  let [portionNumber, setPortionNumber] = useState((currentPageItems + 5) / portionSize);

  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;

  let rightPortionPageNumber = portionNumber * portionSize;

  const prefClick = () => setPortionNumber(portionNumber - 1);
  const nextClick = () => setPortionNumber(portionNumber + 1);

  const filterRange = (pages) => {
    return pages.filter((page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber);
  };

  const mapFilteredPages = (pages) => {
    const filteredPages = filterRange(pages);

    return filteredPages.map((page) => (
      <span
        className={cn(
          {
            [styles.selectedPage]: currentPageItems === page,
          },
          styles.pageNumber
        )}
        key={page}
        onClick={() => newSelectedPage(page)}
      >
        {page}
      </span>
    ));
  };

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && (
        <button className={styles.buttonLeft} onClick={prefClick}>
          Предыдущиее
        </button>
      )}

      {mapFilteredPages(pages)}
      
      {portionCount > portionNumber && (
        <button className={styles.buttonRight} onClick={nextClick}>
          Следующие
        </button>
      )}
    </div>
  );
};

export default Paginator;
