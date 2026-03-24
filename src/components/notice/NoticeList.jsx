import { useState, useEffect } from 'react';
import './notice.scss';
import noticeData from '@/data/noticeData';
import NoticeItem from './NoticeItem';

const PAGE_SIZE = 10;

const NoticeList = ({ onSelect, searchTerm }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const filtered = searchTerm
        ? noticeData.filter((item) =>
              item.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : noticeData;

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
    const pageItems = filtered.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
    );

    return (
        <div className="notice-list">
            <table className="notice-list__table">
                <thead>
                    <tr>
                        <th className="notice-list__th notice-list__th--num">번호</th>
                        <th className="notice-list__th notice-list__th--title">제목</th>
                        <th className="notice-list__th notice-list__th--writer">작성자</th>
                        <th className="notice-list__th notice-list__th--date">작성일</th>
                        <th className="notice-list__th notice-list__th--views">조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {pageItems.map((item) => (
                        <NoticeItem key={item.num} {...item} onSelect={onSelect} />
                    ))}
                </tbody>
            </table>

            <div className="notice-list__pagination">
                <button
                    className="notice-list__page-arrow"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                >
                    &lt;
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        className={`notice-list__page-num ${currentPage === page ? 'is-active' : ''}`}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </button>
                ))}
                <button
                    className="notice-list__page-arrow"
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default NoticeList;
