import arrowFirst from '@/assets/images/products/card/nleft2_arrow.svg';
import arrowFirstActive from '@/assets/images/products/card/left2_arrow.svg';

import arrowPrev from '@/assets/images/products/card/nleft1_arrow.svg';
import arrowPrevActive from '@/assets/images/products/card/left1_arrow.svg';

import arrowNext from '@/assets/images/products/card/nright1_arrow.svg';
import arrowNextActive from '@/assets/images/products/card/right1_arrow.svg';

import arrowLast from '@/assets/images/products/card/nright2_arrow.svg';
import arrowLastActive from '@/assets/images/products/card/right2_arrow.svg';

const ProductsPagination = ({ currentPage, totalPage, limit = 3, onPageChange }) => {
    const currentGroup = Math.ceil(currentPage / limit);
    const startPage = (currentGroup - 1) * limit + 1;
    const endPage = Math.min(startPage + limit - 1, totalPage);

    const canGoPrev = startPage !== 1;
    const canGoNext = endPage !== totalPage;

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    return (
        <div className="pagination">
            {/* 처음 */}
            <button
                className="page-btn icon"
                onClick={() => onPageChange(1)}
                disabled={!canGoPrev}
            >
                <img src={canGoPrev ? arrowFirstActive : arrowFirst} alt="" />
            </button>

            {/* 이전 */}
            <button
                className="page-btn icon"
                onClick={() => onPageChange(startPage - 1)}
                disabled={!canGoPrev}
            >
                <img src={canGoPrev ? arrowPrevActive : arrowPrev} alt="" />
            </button>

            {/* 숫자 */}
            {pages.map((page) => (
                <button
                    key={page}
                    className={`page-btn number ${currentPage === page ? 'active' : ''}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}

            {/* 다음 */}
            <button
                className="page-btn icon"
                onClick={() => onPageChange(endPage + 1)}
                disabled={!canGoNext}
            >
                <img src={canGoNext ? arrowNextActive : arrowNext} alt="" />
            </button>

            {/* 마지막 */}
            <button
                className="page-btn icon"
                onClick={() => onPageChange(totalPage)}
                disabled={!canGoNext}
            >
                <img src={canGoNext ? arrowLastActive : arrowLast} alt="" />
            </button>
        </div>
    );
};

export default ProductsPagination;