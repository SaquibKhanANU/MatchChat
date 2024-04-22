import "./Pagination.css";
import usePagination from "../../../hooks/pagination/usePagination";

interface PaginationProps {
  postsPerPage: number;
  length: number;
  currentPage: number;
  handlePageChange: (pageNumber: number) => void;
}

function Pagination({
  postsPerPage,
  length,
  currentPage,
  handlePageChange,
}: PaginationProps): JSX.Element {
  const { paginationNumbers } = usePagination(postsPerPage, length);

  return (
    <div className="pagination-container">
      {paginationNumbers.map((data) => (
        <button
          key={data}
          onClick={() => handlePageChange(data)}
          className={currentPage === data ? "pagination-active" : ""}
        >
          {data}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
