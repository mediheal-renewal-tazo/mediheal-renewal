import { CiCircleAlert } from 'react-icons/ci';
import { getInquiries } from '@/utils/inquiryStorage';
import InquiryItem from './InquiryItem';

const InquiryList = ({ userId, onSelect }) => {
    const myInquiries = getInquiries().filter((item) => item.userId === userId);

    return (
        <table className="inquiry__table">
            <thead>
                <tr>
                    <th className="inquiry__th inquiry__th--num">번호</th>
                    <th className="inquiry__th inquiry__th--title">제목</th>
                    <th className="inquiry__th inquiry__th--author">작성자</th>
                    <th className="inquiry__th inquiry__th--date">작성일</th>
                    <th className="inquiry__th inquiry__th--status">답변</th>
                </tr>
            </thead>
            <tbody>
                {myInquiries.length > 0 ? (
                    myInquiries.map((item) => (
                        <InquiryItem key={item.id} {...item} onSelect={onSelect} />
                    ))
                ) : (
                    <tr>
                        <td colSpan={5} className="inquiry__empty-cell">
                            <div className="inquiry__empty">
                                <div className="inquiry__empty-icon">
                                    <CiCircleAlert />
                                </div>
                                <p className="inquiry__empty-text">문의결과가 없습니다.</p>
                            </div>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default InquiryList;
