const ProductsPagination = ({ currentPage, totalPage, limit = 3, onPageChange }) => {
    const currentGroup = Math.ceil(currentPage / limit);
    const startPage = (currentGroup - 1) * limit + 1;
    const endPage = Math.min(startPage + limit - 1, totalPage);

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    return (
        <div className="pagination">
            {/* 처음 페이지 */}
            <button onClick={() => onPageChange(1)} disabled={startPage === 1}>
                {'<<'}
            </button>

            {/* 이전 페이지 그룹 */}
            <button onClick={() => onPageChange(startPage - 1)} disabled={startPage === 1}>
                {'<'}
            </button>

            {/* 현재 그룹 페이지 */}
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={currentPage === page ? 'active' : ''}
                >
                    {page}
                </button>
            ))}

            {/* 다음 페이지 그룹 */}
            <button onClick={() => onPageChange(endPage + 1)} disabled={endPage === totalPage}>
                {'>'}
            </button>

            {/* 마지막 페이지 */}
            <button onClick={() => onPageChange(totalPage)} disabled={endPage === totalPage}>
                {'>>'}
            </button>
        </div>
    );
};

export default ProductsPagination;
