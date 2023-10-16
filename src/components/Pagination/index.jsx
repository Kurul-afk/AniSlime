import React from 'react';
import './pagination.css'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button
        className="prev"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ◄
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button
        className="next"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        ►
      </button>
    </div>
  );
};

export default Pagination;
