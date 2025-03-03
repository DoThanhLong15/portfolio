import { useState } from "react";
import style from "./style/Paginator.module.css";

const Paginator = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageClick(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      handlePageClick(currentPage - 1);
    }
  };

  return (
    <div className={style.paginator}>
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={style.btnPrePage}
      >
        Prev
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageClick(index + 1)}
          className={
            style.page + ` ${currentPage === index + 1 ? style.activePage : ""}`
          }
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={style.nextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Paginator;
