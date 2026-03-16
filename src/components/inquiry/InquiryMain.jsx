import { CiCircleAlert } from 'react-icons/ci';
import { IoIosSearch } from 'react-icons/io';
import './inquiry.scss';

const InquiryMain = ({ onWrite }) => {
    return (
        <div className="inquiry">
            <h2 className="inquiry__title">1:1 상담</h2>

            <div className="inquiry__search">
                <input className="inquiry__search-input" type="text" placeholder="문의사항을 검색하세요" />
                <div className="inquiry__search-icon">
                    <IoIosSearch />
                </div>
            </div>

            <div className="inquiry__table">
                <div className="inquiry__table-header">
                    <div className="inquiry__table-col inquiry__table-col--num">
                        <span className="inquiry__table-label">번호</span>
                    </div>
                    <div className="inquiry__table-col inquiry__table-col--title">
                        <span className="inquiry__table-label">제목</span>
                    </div>
                    <div className="inquiry__table-col inquiry__table-col--author">
                        <span className="inquiry__table-label">작성자</span>
                    </div>
                    <div className="inquiry__table-col inquiry__table-col--date">
                        <span className="inquiry__table-label">작성일</span>
                    </div>
                    <div className="inquiry__table-col inquiry__table-col--status">
                        <span className="inquiry__table-label">답변</span>
                    </div>
                </div>

                <div className="inquiry__empty">
                    <div className="inquiry__empty-icon">
                        <CiCircleAlert />
                    </div>
                    <p className="inquiry__empty-text">문의결과가 없습니다.</p>
                </div>
            </div>

            <button className="inquiry__write-btn" onClick={onWrite}>글쓰기</button>
        </div>
    );
};

export default InquiryMain;
