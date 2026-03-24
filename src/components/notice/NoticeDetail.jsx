import './notice.scss';

const NoticeDetail = ({ item, onBack }) => {
    return (
        <div className="notice-detail">
            <h2 className="notice-detail__title">공지사항</h2>

            <div className="notice-detail__form">
                <div className="notice-detail__field">
                    <label className="notice-detail__label">제목</label>
                    <div className="notice-detail__value">{item.title}</div>
                </div>

                <div className="notice-detail__meta">
                    <span className="notice-detail__meta-item">
                        <span className="notice-detail__meta-label">작성자</span>
                        <span className="notice-detail__meta-text">{item.writer}</span>
                    </span>
                    <span className="notice-detail__meta-item">
                        <span className="notice-detail__meta-label">작성일</span>
                        <span className="notice-detail__meta-text">{item.date}</span>
                    </span>
                    <span className="notice-detail__meta-item">
                        <span className="notice-detail__meta-label">조회수</span>
                        <span className="notice-detail__meta-text">{item.views}</span>
                    </span>
                </div>

                <div className="notice-detail__field">
                    <label className="notice-detail__label">내용</label>
                    <div className="notice-detail__value notice-detail__value--content">
                        {item.content}
                    </div>
                </div>

                <div className="notice-detail__actions">
                    <button
                        type="button"
                        className="notice-detail__btn"
                        onClick={onBack}
                    >
                        목록
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NoticeDetail;
