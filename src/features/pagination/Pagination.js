import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({cardsPerPage, totalCards, paginate, currentPage}) => {
    return (
        <div className={styles.Pagination}>
            {currentPage > 1 ?
                <div role={"button"} className={styles.PaginationButton}
                     onClick={() => paginate('previous')}>Previous</div>
                : <div className={styles.PaginationButtonDysfunctional}>Previous</div>}
            {totalCards - 1 > currentPage * cardsPerPage ?
                <div role={"button"} className={styles.PaginationButton} onClick={() => paginate('next')}>Next</div>
                : <div className={styles.PaginationButtonDysfunctional}>Next</div>}
        </div>
    );
};

export default Pagination;
