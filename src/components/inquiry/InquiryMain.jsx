import './inquiry.scss';
import InquiryList from './InquiryList';

const InquiryMain = ({ onWrite, onSelect, userId, listKey }) => {
    return (
        <div className="inquiry">
            <h2 className="inquiry__title">1:1 상담</h2>
            <InquiryList key={listKey} userId={userId} onSelect={onSelect} />
            <button className="inquiry__write-btn" onClick={onWrite}>
                글쓰기
            </button>
        </div>
    );
};

export default InquiryMain;
