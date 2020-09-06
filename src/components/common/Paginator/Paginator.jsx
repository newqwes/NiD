import React, { useState } from "react";
import styles from "./Paginator.module.scss";
import cn from "classnames";

const Paginator = ({
  totalAmountItems,
  itemsOnPage,
  currentPageItems,
  newSelectedPage,
  portionSize = 10,
}) => {
  let buttonsItemPage = Math.ceil(totalAmountItems / itemsOnPage);
  let pages = [];
  for (let i = 1; i <= buttonsItemPage; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(buttonsItemPage / portionSize);
  let [portionNumber, setPortionNumber] = useState(
    (currentPageItems + 5) / portionSize
  );
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;
  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && (
        <button
          className={styles.buttonLeft}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          Предыдущиее
        </button>
      )}

      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              className={cn(
                {
                  [styles.selectedPage]: currentPageItems === p,
                },
                styles.pageNumber
              )}
              key={p}
              onClick={(e) => {
                newSelectedPage(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          className={styles.buttonRight}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          Следующие
        </button>
      )}
    </div>
  );
};

export default Paginator;
