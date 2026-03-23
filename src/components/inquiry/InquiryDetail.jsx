import { useState } from 'react';
import { getAuthUser } from '@/utils/auth';
import { updateInquiry, deleteInquiry } from '@/utils/inquiryStorage';
import './inquiry.scss';

const InquiryDetail = ({ item, onBack, onDeleted, onUpdated }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(item.title);
    const [content, setContent] = useState(item.content);

    const user = getAuthUser();
    const isOwner = user?.id === item.userId;

    const handleUpdate = () => {
        if (!title.trim() || !content.trim()) return;
        updateInquiry(item.id, { title: title.trim(), content: content.trim() });
        setIsEditing(false);
        onUpdated({ ...item, title: title.trim(), content: content.trim() });
    };

    const handleDelete = () => {
        deleteInquiry(item.id);
        onDeleted();
    };

    return (
        <div className="inquiry">
            <h2 className="inquiry__write-title">1:1 상담</h2>

            <div className="inquiry__write-form">
                <div className="inquiry__write-field">
                    <label className="inquiry__write-label">제목</label>
                    {isEditing ? (
                        <input
                            className="inquiry__write-input"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    ) : (
                        <div className="inquiry__detail-value">{title}</div>
                    )}
                </div>

                <div className="inquiry__write-field">
                    <label className="inquiry__write-label">문의내용</label>
                    {isEditing ? (
                        <textarea
                            className="inquiry__write-textarea"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    ) : (
                        <div className="inquiry__detail-value inquiry__detail-value--content">{content}</div>
                    )}
                </div>

                <div className="inquiry__write-field">
                    <label className="inquiry__write-label">답변상태</label>
                    <div className="inquiry__detail-value">{item.status}</div>
                </div>

                <div className="inquiry__write-actions">
                    <button
                        type="button"
                        className="inquiry__write-btn inquiry__write-btn--cancel"
                        onClick={onBack}
                    >
                        목록
                    </button>
                    {isOwner && !isEditing && (
                        <>
                            <button
                                type="button"
                                className="inquiry__write-btn inquiry__write-btn--cancel"
                                onClick={() => setIsEditing(true)}
                            >
                                수정
                            </button>
                            <button
                                type="button"
                                className="inquiry__write-btn inquiry__write-btn--submit"
                                onClick={handleDelete}
                            >
                                삭제
                            </button>
                        </>
                    )}
                    {isOwner && isEditing && (
                        <button
                            type="button"
                            className="inquiry__write-btn inquiry__write-btn--submit"
                            onClick={handleUpdate}
                        >
                            확인
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InquiryDetail;
