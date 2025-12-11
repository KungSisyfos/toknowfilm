interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {

  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <div className="pagination-container">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="back-arrow"
        >←</button>

        <div className="page-numbers">

          {prevPage && (
            <>
              <span className="prev-page" onClick={() => onPageChange(prevPage)}>{prevPage}</span>
            </>
          )}
          
          <span className="current-page">{currentPage}</span>

          {nextPage && (
            <>
            <span className="next-page" onClick={() => onPageChange(nextPage)}>{nextPage}</span>
            </>
          )}  
        </div>

        <button
          disabled={currentPage===totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="forward-arrow"
        >→</button>
    </div>
  )
}

export default Pagination
