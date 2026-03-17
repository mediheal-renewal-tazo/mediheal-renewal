import { CiCircleAlert } from 'react-icons/ci';
import inquiriesData from '@/data/inquiriesData';
import InquiryItem from './InquiryItem';

const InquiryList = () => {
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
                {inquiriesData.length > 0 ? (
                    inquiriesData.map((item) => (
                        <InquiryItem key={item.id} {...item} />
                    ))
                ) : (
                    <tr>
                        <td colSpan={5} className="inquiry__empty">
                            <div className="inquiry__empty-icon">
                                <CiCircleAlert />
                            </div>
                            <p className="inquiry__empty-text">문의결과가 없습니다.</p>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default InquiryList;
