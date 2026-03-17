import { useState } from 'react';
import './notice.scss';
import noticeData from '@/data/noticeData';
import NoticeItem from './NoticeItem';

const NoticeList = () => {
    const [currentPage, setCurrentPage] = useState(1);

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
                    {noticeData.map((item) => (
                        <NoticeItem key={item.num} {...item} />
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
                {[1, 2, 3].map((page) => (
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
                    onClick={() => setCurrentPage((p) => Math.min(3, p + 1))}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default NoticeList;
