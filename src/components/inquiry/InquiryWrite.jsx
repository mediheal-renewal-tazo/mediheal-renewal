import { useState } from 'react';
import { getAuthUser } from '@/utils/auth';
import { addInquiry } from '@/utils/inquiryStorage';
import './inquiry.scss';

const InquiryWrite = ({ onCancel, onSubmit }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) return;
        const user = getAuthUser();
        addInquiry({ userId: user.id, title: title.trim(), content: content.trim() });
        onSubmit();
    };

    return (
        <div className="inquiry">
            <h2 className="inquiry__write-title">1:1 상담</h2>

            <form className="inquiry__write-form" onSubmit={handleSubmit}>
                <div className="inquiry__write-field">
                    <label className="inquiry__write-label">제목</label>
                    <input
                        className="inquiry__write-input"
                        type="text"
                        placeholder="텍스트를 입력하세요."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="inquiry__write-field">
                    <label className="inquiry__write-label">문의내용</label>
                    <textarea
                        className="inquiry__write-textarea"
                        placeholder="텍스트를 입력하세요."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>

                <div className="inquiry__write-radio-group">
                    <span className="inquiry__write-radio-question">
                        답변 여부를 메일로 받으시겠습니까?
                    </span>
                    <label className="inquiry__write-radio-label">
                        <input type="radio" name="emailReply" value="yes" defaultChecked />
                        예
                    </label>
                    <label className="inquiry__write-radio-label">
                        <input type="radio" name="emailReply" value="no" />
                        아니오
                    </label>
                </div>

                <div className="inquiry__write-actions">
                    <button type="button" className="inquiry__write-btn inquiry__write-btn--cancel" onClick={onCancel}>
                        취소
                    </button>
                    <button type="submit" className="inquiry__write-btn inquiry__write-btn--submit">
                        등록
                    </button>
                </div>
            </form>
        </div>
    );
};

export default InquiryWrite;
