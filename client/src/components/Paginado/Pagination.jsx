import style from "./Pagination.module.css"

const Pagination = ({ currentPage, elementsPerPage, totalElements, onPageChange }) => {
    const totalPages = Math.ceil(totalElements / elementsPerPage);
    const pages = [...Array(totalPages).keys()].map(page => page + 1);  
    return (
      <div className={style.pagination1}>
          {pages.map(page => (
              <button  key={page} className={style.button1} onClick={() => onPageChange(page)}>{page}</button>
          ))}
      </div>
    );
  }

export default Pagination;